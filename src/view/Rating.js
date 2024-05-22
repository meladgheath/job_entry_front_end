import Title from "../component/Title";
import Btn from "../component/Btn";
import Selects from "../component/Selects";
import {useState} from "react";
import useFetch from "../controller/useFetch";
import Numberic from "../component/Numberic";
import LargeInput from "../component/LargeInput";

const Rating = () => {
    const [managerData , managerError] = useFetch('http://localhost:3001/Info')
    const [standerData , standerError] = useFetch('http://localhost:3001/stander')
    const [rating , setRating ] = useState()
    const [manager , setManager] = useState()
    const [stander , setStander] = useState()
    const [ notes , setNotes ] = useState()

    const fun = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/rating' , {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({managerID:manager , standerID: stander , rating: rating , details: notes})
        }).then(res => res.json())
            .then(result => {
                if (result.success)
                    alert('Successfully . . . ')
                else
                    throw new Error(result.message)
            }).catch(err => alert(err.message))
    }

    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <Title title='شـــــاشة التـــــقييـــــم' subtitle='يتم في هذه الصفحه تقييم المدراء بناء علي معايير معينه' />
                    <form onSubmit={fun}>
                        <Selects name='manager' data={managerData} rtl={true} id='manager' label='Manager'
                                 holder=' ** Manager  ** '  Change={(e)=> {
                                     const index = e.target.selectedIndex
                            const key = e.target.options[index].getAttribute('data-key')
                            setManager(key)
                        }}/>
                        <Selects name='stander' data={standerData} rtl={true} id='stander' label='Stander'
                                 holder=' ** Stander  ** '  Change={(e)=> {
                            const index = e.target.selectedIndex
                            const key = e.target.options[index].getAttribute('data-key')
                            setStander(key)
                        }}/>
                        <Numberic rtl={true} label='Rating 1 - 5 ' holder='Rating ' Change={(e)=> setRating(e.target.value) }  />
                        <LargeInput label='مــلاحـــظـــات ' holder='write any details you want to add . . . ' rtl={true}
                        Change={(e)=> setNotes(e.target.value) }
                        />
                        <Btn type='submit' caption='تـــخـــزيـــــن' />
                    </form>
                </div>
            </div>

            <br/>

        </>
    )
}
export default Rating