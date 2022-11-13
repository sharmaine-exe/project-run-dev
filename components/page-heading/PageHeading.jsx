import Image from "next/image"
import bannerImage from './../../public/banner.svg'

function PageHeading({tagline, title, ...props}){
    return (
        <header className='text-center py-[5rem] px-5 bg-rose-100'>
            <figure className="flex flex-col md:flex-row md:justify-center
                                md:items-center xl:px-6">
                <figcaption>
                    <h1 className='text-4xl text-red-500 lg:text-5xl xl:text-6xl'>{title}</h1>
                    <p className='text-lg xl:text-xl mt-2'>{tagline}</p>
                </figcaption>
                <Image
                    className="my-4 md:w-3/5"
                    src={bannerImage}
                    alt='project run dev'
                />
            </figure>
            
        </header>
    )
}

export default PageHeading