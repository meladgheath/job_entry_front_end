import {useEffect, useState} from "react";

const useFetch = (url  )=> {


    const [data , setData] = useState([])
    const [err , setErr] = useState()
    const [refresh , setRefresh ] = useState()

    useEffect(()=> {
        fetch(url)
            .then((res)=> res.json())
            .then(result => {
                if (result.success)
                    setData(result.data)
                else
                    throw new Error(result.data)
            }).catch((err)=> setErr(err.message))
    },[ data , err  ])

    return [ data , err ]
}

export default useFetch