import {useEffect, useState} from "react";

const useFetch = (url  )=> {


    const [data , setData] = useState([])
    const [err , setErr] = useState()
    const [isLoading , setLoading ] = useState(false)

   useEffect(()=> {
        fetch(url)
            .then((res)=> res.json())
            .then(result => {
                if (result.success) {
                    setData(result.data)
                    setLoading(true)
                }
                else {
                    throw new Error(result.data)
                    setLoading(false)
                }
            }).catch((err)=> setErr(err.message))
    },[url])

    return [ data , err , isLoading ]
}

export default useFetch