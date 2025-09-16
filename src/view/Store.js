import Title from "../component/Title";
import Inputs from "../component/Inputs";
import React, {useRef} from "react";
import Selects from "../component/Selects";
import useFetch from "../controller/useFetch";
import MyUrl from "../controller/url";
import DateComp from "../component/DateComp";

const Store = ()=> {
    const id = useRef()
    const name = useRef()
    const code = useRef()
    const management = useRef()

    const [data , err ] = useFetch(MyUrl+'/management')

    const fun = (e)=> {
        e.preventDefault()
        console.log('here the store . . . ')
    }

return (
    <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
            <Title title='قــائمــــــة الإدارات'
                   subtitle='هذه الصفحه تضم مجموعة الإدارات و يمكنك إضافة أي إدارة جديدة بالإضافة إلي حذف بعض الإدارات'/>
          <form onSubmit={fun}>
            <Inputs r={id} label='serailNumber' holder='رقم الجهاز التسلسلي' rtl={true}/>
            <Inputs r={name} label='اسم الجهاز' holder='اسم الجهاز ' rtl={true}/>
            <Inputs r={code} label='كود الجهاز' holder='كود/رقم الجهاز ' rtl={true}/>
            <Selects r={management} name='management' label='الإدارة' holder={'**مخزون الإدارة/الفرع **'} rtl={true} data={data} />
              <DateComp />
              {/*
                <Inputs r={code} label='رقم الإشاري' holder='إشاري الإدارة/الفرع' rtl={true}/>*/}
                {/*<Btn type='submit' caption='SAVE'/>*/}
            </form>
        </div>
    </div>
)
}
export default Store;