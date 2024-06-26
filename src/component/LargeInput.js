
const LargeInput = ({label , holder , Change , rtl , r})=> {
    const css = (rtl) ? "text-end" : ""

    return (
        <>
            <div className="mb-5">
                <label  htmlFor="name" className={"mb-3 block text-base font-medium text-[#07074D] "+css}>
                    {label}
                </label>
                <textarea ref={r} name="name" id="name" placeholder={holder} onChange={Change}
                       className={"w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "+css}
                > </textarea>
            </div>
        </>
)
}
export default LargeInput