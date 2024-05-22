import Title from "../component/Title";
import Inputs from "../component/Inputs";
import Btn from "../component/Btn";
import {useEffect, useState} from "react";
import Selects from "../component/Selects";
import useFetch from "../controller/useFetch";
import UploadFileCom from "../component/UploadFileCom";

const Emp_transactions = ()=> {
    const [employment , setEmployment ] = useState()
    const [position , setPosition ] = useState()
    const [department , setDepartment ] = useState()
    const [management , setManagement ] = useState()

    const [positionData , err_position ] = useFetch('http://localhost:3001/position')
    const [departmentData , DepartmentErr ] = useFetch('http://localhost:3001/department')
    const [managementData , managementErr ] = useFetch('http://localhost:3001/management')

    const [Depdata , setDepdata] = useState([])

    useEffect(()=> {
    setDepdata(departmentData.filter(item => item['management'].id == management ))

    }, [management])

    return (
    <>
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <Title title='الموظفيـــن'
                       subtitle='كل تنقلات الموظفين و إعداداتهم ' />
                <form >
                    <Inputs label='Employment' holder='Employment ' Change={(e)=> setEmployment(e.target.value) } />
                    <Selects name='Posistion' holder=' ** Job Position Title ** ' label='Position' id='position' data={positionData}
                             Change={(e)=> {
                                 const index = e.target.selectedIndex
                                 const key = e.target.options[index].getAttribute('data-key')
                                 setPosition(key)
                             }}
                    />
                    <Selects name='Management' holder='-- Management --' id='management' data={managementData} label='Management' Change={(e)=> {
                        const selectIndex = e.target.selectedIndex
                        const key = e.target.options[selectIndex].getAttribute('data-key')
                        setManagement(key)
                    }} />
                    <Selects name='Department' holder='-- Department --' id='department' data={Depdata} label='Department' Change={(e)=> {
                        const selectIndex = e.target.selectedIndex
                        const key = e.target.options[selectIndex].getAttribute('data-key')
                        setDepartment(key)
                    }} />
                    <Btn type='submit' caption='Save' />
                </form>
            </div>
        </div>
        <p>{management}</p>
        </>
)
}
export default Emp_transactions