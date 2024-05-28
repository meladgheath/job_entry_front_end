import {useEffect, useState} from "react";

const useFetch = (url )=> {

    const [data , setData] = useState([])
    const [err , setErr] = useState()
    const [isLoading , setLoading ] = useState(false)

   useEffect(()=> {
       console.log(url)
        fetch(url)
            .then((res)=> res.json())
            .then(result => {
                console.log("here")
                if (result.success) {
                    setData(result.data)
                    setLoading(result.data && result.data.length > 0)
                }
                else {
                    throw new Error(result.messages)
                }

            }).catch((err)=> setErr(err.message))

    },[url])
    return [ data , err , isLoading ]
}

export default useFetch