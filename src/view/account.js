import Title from "../component/Title";
import Inputs from "../component/Inputs";
import Btn from "../component/Btn";
import Tables from "../component/Tables";
import {useEffect, useRef, useState} from "react";
import LargeInput from "../component/LargeInput";
import useFetch from "../controller/useFetch";

const Account = () => {

    const nam = useRef(null)
    const number = useRef(null)
    const detail = useRef(null)

    const [data , err ] = useFetch("http://localhost:3003/account")

/*
    useEffect(() => {
        fetch("http://localhost:3003/account")
            .then(res=>res.json())
            .then((result)=>{
                if (result.success)
                    setdata(result.message)
                else
                    throw new Error(result.message)
        }).catch((err)=> alert(err.message))
    }, []);*/

    // const [number , setnumber] = useState();

    const fun = (e) => {
        e.preventDefault()
        fetch('http://localhost:3003/account',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:nam.current.value , number:number.current.value , detail:detail.current.value})
        }).then(res => res.json())
            .then(result => {
                if (result.success)
                    alert('successfully . . . ')
                else
                    throw new Error(result.message)
            }).catch((err)=> alert(err.message)).finally(() => clear())
    }
    const clear = () => {
        nam.current.value = ''
        number.current.value = ''
        detail.current.value = ''
    }
    const colums = [
        {name: "#"  } ,
        {name:"ID"} ,
        {name:"Number"},
        {name:"Name"},
        {name:"Details"},
        {name:"Remove-btn"}
    ]


    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <Title title='account Parameter dataEntry' subtitle=''/>
                    <form onSubmit={fun}>
                        <Inputs r ={nam} name='name' label='Name' holder='account name' rtl={false} />
                        <Inputs r={number} name='number' label='Number' type='text' holder='account Number' rtl={false} />
                        <LargeInput r={detail} holder='تفاصيل أو ملاحظات إن وجدت' label='Details' />
                        <Btn type='submit' caption='SAVE'/>
                    </form>
                </div>
            </div>
            {/*<Tables tableItems={data} colums={colums} title='Account List' toggle={[]}  delete_url='http://localhost:3003/account/'/>*/}

            <br/>
        </>
    )
}
export default Account