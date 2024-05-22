import Title from "../component/Title";
import Inputs from "../component/Inputs";
import Btn from "../component/Btn";
import { useState} from "react";
import UploadFileCom from "../component/UploadFileCom";


const Employment = () => {
    const [id , setID ] = useState()
    const [name , setName ] = useState()
    const [nationalID , setNationalID] = useState()
    const [ img , setImg ] = useState()
      const fun = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/employment', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({ id:id , name:name , nationalID:nationalID, img: img })

        }).then((res)=> res.json())
            .then(result => {
                if (result.success)
                    alert('successfuly')
                else
                    throw new Error(result.message)
            }).catch((err)=> alert(err.message))
    }

    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                <Title title='قـــائمــة المـــوظفيــــن'
                       subtitle='القائمة تضمن كل موظفين المعنيين سواء الموقوفين عن العمل أو المزاولين في العمل بالإضافة إلي أقسامهم' />
                <form onSubmit={fun}>
                    <Inputs label='ID' holder='employment ID' Change={(e)=> setID(e.target.value)} />
                    <Inputs label='Name' holder='employment Name' Change={(e)=> setName(e.target.value)} />
                    <Inputs label='National-ID' holder='employment national id ' Change={(e)=> setNationalID(e.target.value)} />
                   {/* <Selects name='Management' holder='-- Management --' id='management' data={managementData} label='Management' Change={(e)=> {
                        const selectIndex = e.target.selectedIndex
                        const key = e.target.options[selectIndex].getAttribute('data-key')
                        setManagement(key)
                    }} />
                    <Selects name='Department' holder='-- Department --' id='department' data={Depdata} label='Department' Change={(e)=> {
                        const selectIndex = e.target.selectedIndex
                        const key = e.target.options[selectIndex].getAttribute('data-key')
                        setDepartment(key)
                    }} />*/}
                    <UploadFileCom label='Employment Photo' Change={(e)=> {
                        const file = e.target.files[0]
                        const reader = new FileReader()

                        reader.onload = (e)=> {
                            
                            setImg(e.target.result)
                            console.log(img)
                        }
                        reader.readAsDataURL(file)
                    }
                    }
                    />
                    <br/>
                    <Btn type='submit' caption='Save'/>
                </form>
                </div>
        </div>
    )
}

export default Employment