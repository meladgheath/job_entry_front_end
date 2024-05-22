import Title from "../component/Title";
import Inputs from "../component/Inputs";
import Selects from "../component/Selects";
import useFetch from "../controller/useFetch";
import Btn from "../component/Btn";
import {useState} from "react";
import Tables from "../component/Tables";

const Info = () => {

    const [data , err ] = useFetch('http://localhost:3001/management')
    const [InfoData , InfoErr , refresh , setRefresh ] = useFetch('http://localhost:3001/Info')

    const [name , setName ] = useState()
    const [departmentNumber , setDepartmentNumber ] = useState()
    const [location , setLoaction ] = useState()
    const [management , setManagement ] = useState()

    const colums = [
        {name:'#'},
        {name:"ID" , ref:"id"},
        {name:'Name', ref:"name"},
        {name:'Department-Number'},
        {name:'Loacation'},
        {name:'Management'},
        {name:'Remove-btn'}
    ]
    const fun = (e)=> {
        e.preventDefault()
        fetch('http://localhost:3001/Info',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name: name , department_num: departmentNumber  , geographic_locations:location , managementID:management})
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    alert('successfully . . . ')
                    setRefresh(result)
                }
                else
                    throw new Error(result.messages)
            }).catch((err)=> alert(err.messages))

    }

    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <Title title='تسجيـــــل تقـــارير'
                           subtitle='' />
                    <form onSubmit={fun}>
                        <Inputs name='Name' holder='إسم المدير' label='الإسم '  rtl={true} Change={(e)=> setName(e.target.value)}/>
                        <Selects name='Management' holder=' -*- الإدارات -*- ' label='الإدارة' data={data} id='management' rtl={true}
                         Change={(e)=> {
                             const index = e.target.selectedIndex
                             const key = e.target.options[index].getAttribute('data-key')
                             setManagement(key)
                         }}
                        />
                        <Inputs name='departmentNumber' holder='عدد الأقسام' label='عدد الأقسام '  rtl={true} Change={(e)=> setDepartmentNumber(e.target.value)} />
                        <Inputs name='locations' holder='عدد المواقع الجغرافية' label='المواقع الجغرافية'  rtl={true} Change={(e)=> setLoaction(e.target.value)} />
                        <Btn type='submit' caption='حفظ البيانات' />
                    </form>
                </div>
            </div>
            <Tables colums={colums} title='الــمعــلومـــــات'  tableItems={InfoData} toggle={['management']} togglename='name'
            delete_url='http://localhost:3001/Info/'
                    refresh={setRefresh}
            />
            <br/>
        </>
    )
}
export default Info