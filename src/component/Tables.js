import Btn from "./Btn";

export default ({title, colums , tableItems, toggle, togglename , delete_url , refresh , delete_id  }) => {
    const here = true
    let c = 0
    function ex (id) {
        console.log(delete_url+id)
        fetch(delete_url+id,{
            method:"DELETE",
            headers:{
                    'Content-Type':'application/json'
                }
        }).then(res => res.json())
            .then(result => {
                if (result.success){
                    alert('the element with id '+id +' was removed successfuly')
                    refresh(true)
                }
                else
                    throw new Error(result.message)
            }).catch((err)=> {
                if (err.message === 'FK')
                    alert('الإدارة/الفرع منفذ ضمن سلسلة من القيود لذلك لا يمكن حذفه')
            else
                alert(err.message)
        })
    }


    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                    {title}
                </h3>
                <p className="text-gray-600 mt-2">
                    {/*Lorem Ipsum is simply dummy text of the printing and typesetting industry.*/}
                </p>

                </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table dir='rtl' className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                    <tr>
                        {
                            colums.map((item, idx) => (
                           <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                            ))
                        }
                    </tr>
                    </thead>

                    <tbody className="text-gray-600 divide-y">
                    {tableItems.map((item, idx) => (
                        <tr key={idx} >
                            <td className="px-6 py-4 whitespace-nowrap">{idx+1}</td>
                            {Object.keys(item).map((i)=> (

                                <td className="px-6 py-4 whitespace-nowrap">{
                                    (toggle.includes(i)) ? item[toggle[toggle.findIndex(e => e === i )]][togglename] : item[i]
                                        // item[toggle][togglename] : item[i]
                                       // (i === toggle) ? item[toggle][togglename] : item[i]
                                }</td>
                            ))}
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <Btn caption='remove' click={()=> ex(item[delete_id])}/> </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>

        </div>
    )
}