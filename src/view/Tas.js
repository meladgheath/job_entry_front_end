import Title from "../component/Title";
import Inputs from "../component/Inputs";
import LargeInput from "../component/LargeInput";
import Btn from "../component/Btn";
import Tables from "../component/Tables";
import React, {useEffect, useRef, useState} from "react";
import Selects from "../component/Selects";
import MyUrl from "../controller/url";

const Tas = ()=> {

    const money = useRef()
    const values = useRef()
    const [data , setData] = useState();
    const [res , setRes] = useState();

    useEffect(()=>{
        if (res)
            fetch(MyUrl + "/restrictions/status/" + res)
                .then(res => res.json())
                .then(res => {
                    if (res.success && res.data.length > 0) {
                        let d = res.data
                        d[0].money = Number( res.data[0].credit) + Number( res.data[0].debit )
                        setData(d)
                    }else
                        throw new Error("unkown error")

                }).catch(err => setData(undefined))

            console.log("do not connect . . . ")
    },[res])

    const fun = (e)=> {
        e.preventDefault()
        fetch(MyUrl + "/tas/" , {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            value: values.current.value ,
            res: parseInt(money.current.value)
            })
        }).then(res => res.json())
            .then(res => {
                if (res.success )
                    alert("successfully save . . . ")
                else
                    throw new Error("unable to save tas")
            }).catch(err => alert(err))

    }

    return (
        <>
            {JSON.stringify(data)}
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <Title title='إدخال رقم الحســـاب' subtitle=''/>
                    <form  onSubmit={fun}>
                        <Inputs    name='name'  label='القيد ' holder=' رقم القيد  ' rtl={true}  Change={(e)=> setRes(e.target.value)} />
                        {/*<Inputs  name='number' label='Number' type='text' holder='رقم الحســــاب' rtl={true} />*/}
                        {/*<LargeInput r={detail} holder='تفاصيل أو ملاحظات إن وجدت' label='تفاصيل' rtl={true} />*/}
                        <Selects r={money} label="إجمالي التســـوية" rtl={true}  data={data} holder={"*_*"} selectedItem="money"/>
                        <Inputs name='tas' label='قيمة التسوية' rtl={true} r={values} />
                        <Btn type='submit' caption='SAVE'/>
                    </form>
                </div>
            </div>

            <br/>
        </>
    )
}
export default Tas;