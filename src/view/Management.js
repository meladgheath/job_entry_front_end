import Inputs from "../component/Inputs";
import Btn from "../component/Btn";
import {useRef, useState} from "react";
import Tables from "../component/Tables";
import useFetch from "../controller/useFetch"
import Title from "../component/Title";
import React from "react";

import ReactDOM from 'react-dom';
import MyUrl from "../controller/url";


const Management = () => {


    const [data , err ] = useFetch(MyUrl+'/management')

    const name = useRef(null)
    const code = useRef(null)

    const colums =[
        {name : "#"} ,
        {name : "ID"},
        {name : "Name"} ,
        {name: "Code"},
        {name: "Remove-btn"}
    ]

    // const [data , err] = useFetch('http://localhost:3003/management')
    const fun =  (e) => {
        e.preventDefault()
        //
     fetch(MyUrl+'/management/',{
         method:'POST',
         headers:{
             'Content-Type':'application/json'
         },
         body: JSON.stringify({name:name.current.value , code:code.current.value})
         })
         .then((res) => res.json())
         .then((result)=> {
            if (result.success)
                alert("completed successfully")
             else
                 throw new Error(result.messages)
         }).catch((err)=> alert(err.message()))
         .finally(()=> clear())
    }
const clear = ()=> {
        name.current.value = "";
        code.current.value = ""
}
    return (
        <>

            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <Title title='قــائمــــــة الإدارات' subtitle='هذه الصفحه تضم مجموعة الإدارات و يمكنك إضافة أي إدارة جديدة بالإضافة إلي حذف بعض الإدارات' />
                    <form onSubmit={fun}>
                        <Inputs r={name} label='الإسم' holder='إسم الإدارة/الفرع'  rtl={true}/>
                        <Inputs r={code} label='رقم الإشاري' holder='إشاري الإدارة/الفرع' rtl={true} />
                        <Btn type='submit' caption='SAVE'/>
                    </form>
                </div>

            </div>
            <Tables colums={colums} title='مجموعات الإدارات/الفروع' toggle={[]} tableItems={data} delete_url='http://localhost:3003/management/' />
            <br/>

            <br/>
        </>
    )
}
export default Management