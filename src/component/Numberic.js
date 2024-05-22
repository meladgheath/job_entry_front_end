const Numberic = ({label , rtl , holder , Change}) => {

    const css = (rtl) ? "mb-3 block text-base font-medium text-[#07074D] text-end" : "mb-3 block text-base font-medium text-[#07074D]"

    return (
        <>

            <div className="mb-5">
                <label htmlFor="name" className={css}>
                    {label}
                </label>
                <input type="number" min='1' max='5'  name="name" id="name" placeholder={holder} onChange={Change}
                       className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            </>
    )
}

export default Numberic