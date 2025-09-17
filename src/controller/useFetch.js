import {useEffect, useState} from "react";
import MyUrl from "./url";

const useFetch = (url  )=> {


    const [data , setData] = useState([])
    const [err , setErr] = useState()
    const [isLoading , setLoading ] = useState(false)

    useEffect(()=> {
        console.log(MyUrl)
        fetch(url)
            .then((res)=> res.json())
            .then(result => {

                if (result.success) {
                    // if(data === result.data)
                    setData(result.data)
                    setLoading((result.data && result.data.length > 0))
                }
                else
                    throw new Error(result.data)
            }).catch((err)=> {
            setErr(err.message)
            setLoading(false)
        })
    },[ data , err  ])

    console.log(MyUrl)

    return [ data , err  , isLoading]
}

export default useFetch