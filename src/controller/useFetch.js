import {useEffect, useState} from "react";
import MyUrl from "./url";

const useFetch = (url , ref  )=> {


    const [data , setData] = useState([])
    const [err , setErr] = useState()
    const [isLoading , setLoading ] = useState(false)

    useEffect(()=> {
        fetch(url)
            .then((res)=> res.json())
            .then(result => {

                if (result.success) {
                    setData(result.data)
                    setLoading((result.data && result.data.length > 0))
                }
                else
                    throw new Error(result.data)
            }).catch((err)=> {
            setErr(err.message)
            setLoading(false)
        })
    },[ ref  ])

    return [ data , err  , isLoading]
}

export default useFetch