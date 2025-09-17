import Title from "../component/Title";
import Inputs from "../component/Inputs";
import Btn from "../component/Btn";
import Tables from "../component/Tables";
import React, {useEffect, useRef, useState} from "react";
import Selects from "../component/Selects";
import MyUrl from "../controller/url";
import deleteBtnTable from "../controller/deleteBtnTable";

const Tas = ()=> {

    const money = useRef()
    const values = useRef()
    const [data , setData] = useState();
    const [tableData , setTableData] = useState();
    const [tableToggal , setTableToggal] = useState(false);
    const [res , setRes] = useState();
    const [selectName , setSelectName] = useState(false);
    const [refresh , setRefresh] = useState(false);



    useEffect( () => {

        fetch(MyUrl + "/restrictions/status/" + res)
            .then(res => res.json())
            .then(res => {
                if (res.success && res.data.length > 0) {
                    let d = res.data
                    res.data.map((item,index)=> {
                        d[index].money = Number(item.credit) + Number(item.debit)
                    })
                    setData(d)
                } else
                    throw new Error("unkown error")
            }).catch(err => setData(undefined))
    },[res])

    useEffect(()=>{
            if (res && money.current)
                fetch(MyUrl + "/tas/"+ money.current.options[money.current.selectedIndex].text
                    + "/" + res)
                    .then(res => res.json())
                    .then(res => {
                        if (res.success && res.data.length > 0) {
                            setTableData(res.data)
                            setTableToggal(true)
                        }
                        else
                            throw new Error("unkown error")
                    }).catch(err => {
                    setTableData(undefined)
                    setTableToggal(false);
                }).finally(() => setRefresh(!refresh));
        },[selectName , refresh])



    const fun = (e)=> {
        e.preventDefault()
        fetch(MyUrl + "/tas/" , {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            value: values.current.value ,
            res: parseInt(res),
            total: money.current.options[money.current.selectedIndex].text
            })
        }).then(res => res.json())
            .then(res => {
                if (res.success )
                    alert("successfully save . . . ")
                else
                    throw new Error("unable to save tas")
            }).catch(err => console.log(err))
            .finally(()=> {
                setRefresh(!refresh)
               })
    }

const dd = async (id) => {
       await  deleteBtnTable(id);
        setRefresh(!refresh);
}
    const colums = [
        {name:'#'},
        {name:"ID"},
        {name:'إجمالي القيد'},
        {name: "قيمة التسوية"},
        {name:"رقم القيد"},
        {name:"حذف"}
    ]

    return (
        <>
            {/*{JSON.stringify(data)}*/}
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <Title title='شـــــاشة تســـوية قيـــود' subtitle='الشاشة مصممه لتسوية قيمة إجمالية معينه لقيـــد'/>
                    <form  onSubmit={fun}>
                        <Inputs    name='name'  label='القيد ' holder=' رقم القيد  ' rtl={true}  Change={(e)=> setRes(e.target.value)} />
                        <Selects r={money} label="إجمالي التســـوية" rtl={true}  data={data} holder={"*_*"} selectedItem="money" Change={(e)=>setSelectName(e.target.value)} />
                        <Inputs name='tas' label='قيمة التسوية' rtl={true} r={values} />
                        <Btn type='submit' caption='SAVE'/>
                    </form>
                </div>
                           </div>

            <br/>
            {tableToggal &&
                <Tables title="جدول التسويات" colums={colums} tableItems={tableData} toggle={[]} delete_id='id'
                        deleteBtn={dd}
                        hasupdate={false} />
            }
        </>
    )
}
export default Tas;