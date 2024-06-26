
const Selects = ({name , label , id , data , holder , rtl , Change , r})=> {

    const css = (rtl) ? "mb-3 block text-base font-medium text-[#07074D] text-end" : "mb-3 block text-base font-medium text-[#07074D]"
    
    return (
        <div className="mb-5">
            <label htmlFor={name} className={css}>
                {label}
            </label>
            <select ref={r} name={name} id={id}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    onChange={Change}
            >
                <option selected disabled={true}>{holder}</option>
                {
                    data.map((item)=> (
                        // <option key={item.id} data-key={item.id}>{item.name}</option>
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))
                }
            </select>

        </div>
    )
}

export default Selects