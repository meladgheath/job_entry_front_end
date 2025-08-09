import Inputs from "../component/Inputs";
import React, {useEffect, useRef, useState} from "react";
import Btn from "../component/Btn";
import Title from "../component/Title";
import Selects from "../component/Selects";
import useFetch from "../controller/useFetch";
import Radio from "../component/Radio";


import MyUrl from "../controller/url";
import LargeInput from "../component/LargeInput";
import Tables from "../component/Tables";


const Restrictions = () => {




    const [restID , setRestID] = useState()
    const [id , setID] = useState()
    const [account , setAccount ] = useState()
    const [updateOn , setUpdateOn ] = useState(false)
    const [datas , setDatas ] = useState([])
    const [refresh , setRefresh ] = useState(false)
    const [selected, setSelected] = useState()
    const prevValueRestID = useRef(null)
    const prevValueAccount = useRef(prevValueRestID.current)


    const name = useRef(null)
    const manag = useRef(null)
    const credit = useRef(null)
    const debit = useRef(null)
    const money = useRef(null)
    const accountName = useRef(null)



        const [data , err ] = useFetch(MyUrl+'/management')


        useEffect(() => {
            if (refresh) {
                fetch(MyUrl + '/restrictions/' + restID)
                    .then((res) => res.json())
                    .then(result => {
                        if (result.success)
                            setDatas(result.data)
                        else
                            throw new Error(result.messages)
                    }).catch((err) => alert(err.message))
                setRefresh(false)
            }
        if (prevValueRestID.current != restID) {
            fetch(MyUrl+'/restrictions/'+restID )
                .then(res => res.json())
                .then(res => {
                    if (res.success && res.data.length > 0) {
                        setDatas(res.data)
                    }

                })
        }
            if (prevValueAccount.current != account) {
                fetch(MyUrl+'/accounts/'+account )
                    .then(res => res.json())
                    .then(res => {
                        if (res.success && res.data.length > 0)
                            accountName.current.value = res.data[0].name
                        else
                            accountName.current.value = ''
                    })
            }
            prevValueAccount.current = account
            prevValueRestID.current= restID
            /**/

    }, [account, restID , refresh]);

    const onUpdate = () => {
        console.log(accountName.current.value)
        fetch(MyUrl+'/restrictions/ID/'+id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                resID :  restID,
                account: account,
                name:name.current.value ,
                managementID: parseInt(manag.current.value),
                credit:(credit.current.checked ? money.current.value : 0),
                debit:(debit.current.checked ? money.current.value : 0),
        })
        }).then((res) => res.json())
            .then((res) => {
                console.log('res', res)
                if (res.success)
                    alert('Updated successfully')
                else
                    throw new Error(res.message)
            }).catch((err) => console.log(err.message))
            .finally(() =>{
                setRefresh(true)
                setUpdateOn(false)
            })
    }
    const funs = (e)=> {
        e.preventDefault()
        if(updateOn)
            onUpdate()
        else
            fun()
    }
    const fun = ()=> {

        let d = 0
        let c = 0
        if (credit.current.checked)
            c = money.current.value
        else
            if (debit.current.checked)
                d = money.current.value

        // console.log(" id "+ id.current.value)
        console.log(manag.current.value)

        fetch(MyUrl+'/restrictions',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id:restID ,
                name:name.current.value,
                managementID:manag.current.value,
                credit:c,
                debit:d,
                account:account,
                accountName:accountName.current.value})
        }).then(res => res.json())
            .then(result => {
                if (result.success)
                    alert('successfully . . . ')
                else
                    throw new Error(result.message)
            }).catch((err)=> alert(err.message)).finally(() => clear())
            .finally(() => setRefresh(true))
    }
    function ex (id) {
        fetch(MyUrl+'/restrictions/'+id,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res => res.json())
            .then(result => {
                if (result.success)
                    alert('the element with id '+id +' was removed successfuly')
                else
                    throw new Error(result.message)
            }).catch((err)=> {
            if (err.message === 'FK')
                alert('الإدارة/الفرع منفذ ضمن سلسلة من القيود لذلك لا يمكن حذفه')
            else
                alert(err.message)
        }).finally(() => setRefresh(true))
    }
    function update (id) {
        fetch(MyUrl+'/restrictions/ID/'+id)
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    setAccount(res.data[0].account)
                    name.current.value =  res.data[0].name
                    setSelected(res.data[0].management_rel.id)
                    setID(res.data[0].id)
                    if (res.data[0].debit == 0 ) {
                        credit.current.checked = true
                        money.current.value = res.data[0].credit
                    }else {
                        debit.current.checked = true
                        money.current.value = res.data[0].debit
                    }
                    setUpdateOn(true)
                }
            }).catch((err)=> alert(err.message))
    }

    const clear = ()=> {
        manag.current.value = ''
        credit.current.checked = false
        debit.current.checked = false
        money.current.value = ''
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
                <form onSubmit={funs}>
                    <Inputs name='ID' holder='رقم القيد' rtl={true} label='رقم القيد' Change={(e)=> setRestID(e.target.value) }/>
                    <LargeInput name='name' holder=' وصــــف القيد /البيــــــــــــان' label='مسمـــي القيد' rtl={true} r={name} />
                    <Selects r={manag} data={data} label='الإدارت/الفروع' rtl={true} selected_id={selected}/>

                    <ul className="grid w-full gap-6 md:grid-cols-2">
                        <Radio name='state' id='credit' value='C' label='إضافة' r={credit}/>
                        <Radio name='state' id='debit' value='D' label='خصم' r={debit}/>
                    </ul>
                    <Inputs name='money' rtl={true} label='القيمة' holder=' القيمة المدخلة ' r={money} />
                    <Inputs name='account' v={account}   rtl={true} label='رقم الحساب' holder='رقــــم الحــســـــاب'  Change={
                        (e) => setAccount(e.target.value)
                    }  />
                    <Inputs name='accountName' rtl={true} label='مسمي الحســاب' holder='اســـــم الحــســـــاب'
                            Disable={true}
                            r={accountName} />
                    <Btn type='submit' caption='SAVE'/>
                    <br/>
                    <Btn type='reset' caption='RESET'   />
                </form>
            </div>

        </div>
                <Tables colums={colums} tableItems={datas} toggle={['management_rel']} togglename={['name']}
                 delete_id='id' refresh={refresh}  deleteBtn={ex} updateBtn={update} hasupdate={true}/>
    </>
)
}
export default Restrictions;