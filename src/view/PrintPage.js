
import React, {useRef, useState} from "react";
import Title from "../component/Title";
import Inputs from "../component/Inputs";
import Btn from "../component/Btn";
import useFetchwithID from "../controller/useFetchwithID";

import MyUrl from "../controller/url";
import {useNavigate} from "react-router-dom";
import {useBearStore} from "../controller/useBearStore";

const PrintPage = () => {

    const id = useRef(null);
    const [restID ,  setRestID] = useState(null);

    const name = useBearStore((state)=> state.name)
    const Navigator = useNavigate()

    const fun = (e) => {
        e.preventDefault();
        setRestID(id.current.value);
    }
    const colums = [
        {name:'#'},
        {name:'id'},
        {name:'restID'},
        {name:'name'},
    ]

    const [data , err ] = useFetchwithID(MyUrl+'/restrictions/'+restID)


    const printBtn = (id)=> {
        // window.open('/mydoc?id='+id);
    // , '_blank'

        Navigator('/mydoc?id='+id)
    }

    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <Title title='شاشــــــة القيود' subtitle=''/>
                    <form onSubmit={fun}>
                        <Inputs name='name' holder='رقم القيد' label='رقم القيد' rtl={true} r={id}/>
                        <Btn type='submit' caption='SAVE' />
                    </form>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">

                    </h3>
                    <p className="text-gray-600 mt-2">
                        {/*Lorem Ipsum is simply dummy text of the printing and typesetting industry.*/}
                    </p>

                </div>

                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                    <table dir='rtl' className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">#</td>
                            <td className="px-6 py-4 whitespace-nowrap">رقم القيـــد</td>
                            <td className="px-6 py-4 whitespace-nowrap">إسم القيــد/وصف القيد</td>
                            <td className="px-6 py-4 whitespace-nowrap">debit</td>
                            <td className="px-6 py-4 whitespace-nowrap">credit</td>
                            <td className="px-6 py-4 whitespace-nowrap">الإدارة/الفرع</td>
                            <td className="px-6 py-4 whitespace-nowrap">طبـــاعة</td>
                        </tr>
                        </thead>

                        <tbody className="text-gray-600 divide-y">
                        {
                            data.map((item, idx) => (
                            <tr key={idx}>

                                    <td className="px-6 py-4 whitespace-nowrap">{idx+1}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.resID}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.debit}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.credit}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{item.management_rel.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap"><Btn caption='طباعة'
                                        click={()=> printBtn(item.id) }/> </td>
                            </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default PrintPage;