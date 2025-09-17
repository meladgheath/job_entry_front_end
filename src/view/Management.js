import Inputs from "../component/Inputs";
import Btn from "../component/Btn";
import {useRef} from "react";
import Tables from "../component/Tables";
import useFetch from "../controller/useFetch"
import Title from "../component/Title";
import React from "react";
import MyUrl from "../controller/url";
import CenterPage from "../component/CenterPage";
import Radio from "../component/Radio";


const Management = () => {


    const [ref , setRef] = React.useState(false);

    const [data , err , isLoading] = useFetch(MyUrl+'/management', ref)

    const name = useRef(null)
    const code = useRef(null)

    const isManagement = useRef(null)
    const isBransh     = useRef(null)

    const colums =[
        {name : "#"} ,
        {name : "ID"},
        {name : "Name"} ,
        {name: "Code"},
        {name: "Remove-btn"}
    ]


    const fun =  (e) => {
        e.preventDefault()
        //
        let type = (isManagement.current.checked) ? 'M' : (isBransh.current.checked) ? 'B' : ''

       fetch(MyUrl+'/management/',{
         method:'POST',
         headers:{
             'Content-Type':'application/json'
         },
         body: JSON.stringify({name:name.current.value , code:code.current.value , type})
         })
         .then((res) => res.json())
         .then((result)=> {
            if (result.success) {
                alert("completed successfully")
                setRef(!ref)
            }
             else
                 throw new Error(result.messages)
         }).catch((err)=>
           alert(err)
           ).finally(()=> clear())
    }

    function ex (id) {
        fetch(MyUrl + '/management/' + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    alert('the element with id ' + id + ' was removed successfuly')
                    setRef(!ref)
                }
                else
                    throw new Error(result.message)
            }).catch((err) =>
            alert(err.message));
    }


const clear = ()=> {
        name.current.value = "";
        code.current.value = ""
        isManagement.current.checked = false
        isBransh.current.checked = false

}
    return (
        <>

            <CenterPage>
                    <Title title='قــائمــــــة الإدارات' subtitle='هذه الصفحه تضم مجموعة الإدارات و يمكنك إضافة أي إدارة جديدة بالإضافة إلي حذف بعض الإدارات' />
                <form onSubmit={fun}>
                    <Inputs r={name} label='الإسم' holder='إسم الإدارة/الفرع' rtl={true}/>
                    <Inputs r={code} label='رقم الإشاري' holder='إشاري الإدارة/الفرع' rtl={true}/>
                    <ul className="grid w-full gap-6 md:grid-cols-2">
                        <Radio name='type' id='bransh'     value='B' label='فرع' r={isBransh}/>
                        <Radio name='type' id='management' value='M' label='إدارة' r={isManagement}/>
                    </ul>
                    <br/>
                        <Btn type='submit' caption='SAVE'/>
                </form>
            </CenterPage>
            <Tables colums={colums} title='مجموعات الإدارات/الفروع' toggle={[]} tableItems={data}
            deleteBtn={ex}
            delete_id='id'
            />
            <br/>
            <br/>
        </>
    )
}
export default Management