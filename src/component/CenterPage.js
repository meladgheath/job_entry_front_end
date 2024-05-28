const CenterPage = ({children}) => {
    return (
        <div className="flex items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px] bg-white">
                {children}
            </div>
        </div>
    )
}

export default CenterPage