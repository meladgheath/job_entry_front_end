import Inputs from "../component/Inputs";
import React, {useEffect, useRef, useState} from "react";
import Btn from "../component/Btn";
import Title from "../component/Title";
import Selects from "../component/Selects";
import useFetch from "../controller/useFetch";
import Radio from "../component/Radio";

import Tables from "../component/Tables";
import useFetchwithID from "../controller/useFetchwithID";

import MyUrl from "../controller/url";
import LargeInput from "../component/LargeInput";


const Restrictions = () => {


    const id = useRef(null)
    const [restID , setRestID] = useState()
    const name = useRef(null)
    const manag = useRef(null)
    const credit = useRef(null)
    const debit = useRef(null)
    const money = useRef(null)
    const account = useRef(null)
    const accountName = useRef(null)


        const [tadata , taerr, isLoading, refresh ] = useFetchwithID(MyUrl+'/restrictions/'+restID )
        const [data , err ] = useFetch(MyUrl+'/management')


    const fun = (e)=> {
        e.preventDefault()

        let d = 0
        let c = 0
        if (credit.current.checked)
            c = money.current.value
        else
            if (debit.current.checked)
                d = money.current.value

        fetch(MyUrl+'/restrictions',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:id.current.value , name:name.current.value ,managementID:manag.current.value,
                credit:c,debit:d,
                account:account.current.value,accountName:accountName.current.value,})
        }).then(res => res.json())
            .then(result => {
                if (result.success)
                    alert('successfully . . . ')
                else
                    throw new Error(result.message)
            }).catch((err)=> alert(err.message)).finally(() => clear())


    }
    const clear = ()=> {
        manag.current.value = ''
        credit.current.checked = false
        debit.current.checked = false
        money.current.value = ''
        account.current.value = ''
    }
    const colums =[
        {name:'#'},
        {name:'ID'},
        {name:'رقم القيد'},
        {name:'الإسم'},
        {name:'debit'},
        {name:'credit'},
        {name:'الإدارة/الفرع'},
        {name:'Rmove-btn'}
    ]

return (
    <>

        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <Title title='شاشــــــة القيود' subtitle='' />
                <form onSubmit={fun}>
                    <Inputs r={id} name='ID' holder='رقم القيد' rtl={true} label='رقم القيد' Change={(e)=> setRestID(e.target.value) }/>
                    <LargeInput name='name' holder=' وصــــف القيد /البيــــــــــــان' label='مسمـــي القيد' rtl={true} r={name} />
                    <Selects r={manag} data={data} label='الإدارت/الفروع' rtl={true}/>

                    <ul className="grid w-full gap-6 md:grid-cols-2">
                        <Radio name='state' id='credit' value='C' label='إضافة' r={credit}/>
                        <Radio name='state' id='debit' value='D' label='خصم' r={debit}/>
                    </ul>
                    <Inputs name='money' rtl={true} label='القيمة' holder=' القيمة المدخلة ' r={money} />
                    <Inputs name='account' rtl={true} label='رقم الحساب' holder='رقــــم الحــســـــاب' r={account} />
                    <Inputs name='accountName' rtl={true} label='مسمي الحســاب' holder='اســـــم الحــســـــاب' r={accountName} />
                    <p>{isLoading}</p>
                    <Btn type='submit' caption='SAVE'/>
                    <br/>
                    <Btn type='reset' caption='RESET' />

                </form>
            </div>
        </div>
        {isLoading &&
        <Tables colums={colums} tableItems={tadata} toggle={['management_rel']} togglename={['name']}
                delete_url={MyUrl+'/restrictions/'} delete_id='id' refresh={refresh} />
        }
    </>
)
}
export default Restrictions;