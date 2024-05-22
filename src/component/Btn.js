
const Btn = ({caption, type,click})=> {
    return (
        <div>
            <button
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                type={type}
                onClick={click}
            >
                {caption}
            </button>
        </div>
    )
}
export default Btn