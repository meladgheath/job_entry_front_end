import Title from "../component/Title";
import Selects from "../component/Selects";
import useFetch from "../controller/useFetch";
import { useState} from "react";
import Tables from "../component/Tables";

const ManagerReport = () => {
    const [id , setID ] = useState(0)
    const [managerData , managerError   ] = useFetch('http://localhost:3001/Info')
    const [manager , setManager ] = useState()
    const [ratingData , setRatingData ] = useState()


        const [data , error , refresh , setRefresh] = useFetch('http://localhost:3001/rating/'+manager)


    const colums = [
        {name:'#'},
        {name:'rating-number'},
        {name:'stander'},
        {name:'Manager'},
    ]
    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <Title title='تـــقـــاريــــر التـــــقييـــــم' subtitle='يتم في هذه الصفحه تقييم المدراء بناء علي معايير معينه' />
                    <form >
                        <Selects name='manager' data={managerData} rtl={true} id='manager' label='Manager'
                                 holder=' ** Manager  ** '  Change={(e)=> {
                            const index = e.target.selectedIndex
                            const key = e.target.options[index].getAttribute('data-key')
                            setManager(key)
                            setRefresh(key)
                        }} />
                    </form>
                </div>
            </div>
            <Tables colums={colums} tableItems={data}  toggle={['stander', 'info_man']} togglename='name' />
        </>
    )
}

export default ManagerReport