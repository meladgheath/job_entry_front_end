import {useEffect, useRef, useState} from "react";

const useFetch = (url )=> {

    const ref = useRef([]);
    const [data , setData] = useState([])
    const [err , setErr] = useState()
    const [isLoading , setLoading ] = useState(false)
    const [refresh , setRefresh ] = useState(false)

   useEffect(()=> {
       // if (refresh) {
           fetch(url)
               .then((res) => res.json())
               .then(result => {
                   if (result.success) {
                       setData(result.data)
                       // setLoading(result.data && result.data.length > 0)
                       setLoading(true)
                       // setRefresh(true)
                   } else
                       throw new Error(result.messages)

               }).catch((err) => {
                   setErr(err.message)
               setLoading(false)
           })

       setRefresh(false)
    },[url])
    return [ data  , err , isLoading , refresh]
}
export default useFetch