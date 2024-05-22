const Title = ({title , subtitle}) => {
return (
    <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title} </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">{subtitle}</p>
    </div>
)
}

export default Title