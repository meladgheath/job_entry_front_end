import Title from "../component/Title";
import Inputs from "../component/Inputs";
import {useState} from "react";
import Selects from "../component/Selects";
import useFetch from "../controller/useFetch";
import Btn from "../component/Btn";
import Tables from "../component/Tables";

const Department = () => {
    const [name , setName] = useState()
    const [data , err] = useFetch('http://localhost:3001/management')
    // const data = []
    const [department , error , refresh , setRefresh] = useFetch('http://localhost:3001/department')

    const [selectvalue , setSelectValue ] = useState()

    const colum = [
        {name : "#" },
        {name: "ID" },
        {name : "Name"},
        {name : "Management", re: "name"},
        {name: "Remove-btn"}
    ]

    const fun = (e)=> {
        e.preventDefault()
        console.log(selectvalue)
        fetch('http://localhost:3001/department',{
            method:'POST',
            headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({name:name , managementID: parseInt(selectvalue)})
        }).then((res)=> res.json())
            .then((result) => {
                if (result.success){
                    alert('good on you ')
                    setRefresh(result)
                }
                else
                    throw new Error(result.message)
            }).catch((err) => alert(err.message))
    }
    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <Title title='قــائمــــــة الأقســـــــام' subtitle='' />
                    <form onSubmit={fun}>
                    <Inputs name='Name' label='Name' holder='Department Name' Change={(e)=> setName(e.target.value)} />
                    <Selects id='management' label='Management' name='management'  data={data} holder='-- choice management --'
                    Change={(e)=> {
                        const selectIndex = e.target.options.selectedIndex
                        const key = e.target.options[selectIndex].getAttribute('data-key')
                        setSelectValue(key)
                        console.log(key)
                    }}
                    />
                        <Btn type='submit' caption='Save' />
                    </form>
                </div>
            </div>
            <Tables colums={colum} title='Department Table ' tableItems={department} toggle={['management']} togglename='name'
            delete_url='http://localhost:3001/department/'
            refresh={setRefresh}
            />
            <br/>
            <br/>
            </>
    )
}

export default Department