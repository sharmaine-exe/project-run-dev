function PageHeading({tagline, title, ...props}){
    return (
        <header className='text-center py-[10rem] bg-rose-100'>
            <img className="w-[98px] mx-auto" src="myfavicon.svg" alt={title} />
            <h1 className='text-6xl text-red-500'>{title}</h1>
            <p className='text-xl mt-2'>{tagline}</p>
        </header>
    )
}

export default PageHeading