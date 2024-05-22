import Title from "../component/Title";
import Inputs from "../component/Inputs";
import {useState} from "react";
import Btn from "../component/Btn";
import Tables from "../component/Tables";
import useFetch from "../controller/useFetch";

const Stander = () => {
    const [name , setName] = useState()

    const [data , err ] = useFetch('http://localhost:3001/stander')
    const fun = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/stander',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:name})
        }).then(res => res.json())
            .then(result => {
                if (result.success)
                    alert('Successfully . . . ')
                else
                    throw new Error(result.message)
            }).catch((err)=> alert(err.message))
    }
    const colums = [
        {name:"#"},
        {name:"ID"},
        {name:"Name"}
    ]
    return (
        <>
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <Title title='تــــسجيــــــل المـــــعـــاييـــــر' subtitle='' />
                <form onSubmit={fun}>
                    <Inputs name='Name' label='الإسم' holder='مسمي المعيار' rtl={true} Change={(e)=> setName(e.target.value)} />
                    <Btn type='submit' caption='تـــخـــزيـــــن' />
                </form>
            </div>
        </div>
            <Tables tableItems={data} colums={colums} title='قـــائمـــة المعــــاييـــــر' toggle={[]} />
            <br/>

        </>
    )
}
export default Stander