import Title from "../component/Title";
import Inputs from "../component/Inputs";
import {useState} from "react";
import Btn from "../component/Btn";
import Tables from "../component/Tables";
import useFetch from "../controller/useFetch";


const Positions = () => {
    const [name , setName] = useState()
    const [data , err , refresh , setRefresh ] = useFetch('http://localhost:3001/position')
    const fun = (e)=> {
        e.preventDefault()
        fetch('http://localhost:3001/position',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name:name})
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    alert('successfully . . . ')
                    setRefresh(result)
                }
                else
                    throw new Error(result.messages)
            }).catch((err)=> alert(err.messages))
            .finally(()=> setName(null))
    }
    const colum = [
        {name:"#"},
        {name:"ID"},
        {name:"Name"},
        {name:"Remove-btn"}
    ]

    return(
        <>
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <Title title='إعداد المـــــناصـــــــب'
                       subtitle='يتم هنا إعداد و انشاء المناصب و إخراج تقارير كليه من المناصب' />
                <form onSubmit={fun}>
                    <Inputs label='Position name' holder='Posistion type  ID' Change={(e)=> setName(e.target.value)} />

                    <Btn type='submit' caption='Save' />
                </form>
            </div>
        </div>
        <Tables title='Job Position Title' colums={colum} tableItems={data} toggle={[]}  refresh={setRefresh}
        delete_url='http://localhost:3001/position/'
        />
            <br/>
        </>
    )
}

export default Positions