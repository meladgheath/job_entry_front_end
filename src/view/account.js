import Title from "../component/Title";
import Inputs from "../component/Inputs";
import Btn from "../component/Btn";

import React, { useRef, useState} from "react";
import LargeInput from "../component/LargeInput";
import useFetch from "../controller/useFetch";
import Tables from "../component/Tables";
import MyUrl from "../controller/url";

const Account = () => {

    const nam = useRef(null)
    const number = useRef(null)
    const detail = useRef(null)
     const [account , setAccount ] = useState()
    const [ref , setRef]  = useState(false)
    const [data , err,isLoad ] = useFetch(MyUrl+"/account", ref )


    const fun = (e) => {
        e.preventDefault()
        fetch(MyUrl+'/account',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:nam.current.value ,
                number:number.current.value ,
                detail:detail.current.value
            })
        }).then(res => res.json())
            .then(result => {
                if (result.success)
                    alert('successfully . . . ')
                else
                    throw new Error(result.message)
            }).catch((err)=> alert(err.message)).finally(() => {
                clear()
              setRef(!ref)
            })
    }

    function ex (id) {
        fetch(MyUrl + '/account/' + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    alert('the element with id ' + id + ' was removed successfuly')
                    setRef(!ref)
                }
                else
                    throw new Error(result.message)
            }).catch((err) =>alert(err.message))
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
                    <Title title='إدخال رقم الحســـاب' subtitle=''/>
                    <form onSubmit={fun}>
                        <Inputs r ={nam} name='name'  label='الإسم' holder='مسمي الحساب ' rtl={true} />
                        <Inputs r={number} name='number' label='Number' type='text' holder='رقم الحســــاب' rtl={true} />
                        <LargeInput r={detail} holder='تفاصيل أو ملاحظات إن وجدت' label='تفاصيل' rtl={true} />
                        <Btn type='submit' caption='SAVE'/>
                    </form>
                </div>
            </div>

            {isLoad &&
                <Tables colums={colums} title={'الحســـابات الكلية'} tableItems={data}
                        deleteBtn={ex}
                         toggle={[]} delete_id='id'
                        hasupdate={false}
                />
            }
            <br/>
        </>
    )
}
export default Account