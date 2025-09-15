const Checkbox = ({label, r}) => {
    return (
        <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" ref={r}
                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 text-end"/>
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
        </div>
    )
}


export default Checkbox