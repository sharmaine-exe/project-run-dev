import {ContentPageHeader} from './../components/headers'
import Image from "next/image"
import PNFImage from './../public/404.png'
import PNFImage2 from './../public/broken.png'
import Link from 'next/link';

function PageNotFound() {
    return ( 
        <>
            <ContentPageHeader 
                title="Page Not Found"
            />

<div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                Looks like you've found the
                                doorway to the great nothing
                            </h1>
                            <p className="my-2 text-gray-800">Sorry about that! Please visit our homepage to get where you need to go.</p>
                            <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-red-500 text-white hover:bg-rose-700 hover:text-white  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50" ><Link href="/">Take me there</Link></button>
                        </div>
                    </div>
                    <div className='bg-text-500'>
                        <Image 
                            className="my-4"
                            src={PNFImage}
                            alt='404'/>
                    </div>
                </div>
            </div>
            <div>
                <Image 
                    className="my-4"
                    src={PNFImage2}
                    alt='404' />
            </div>
        </div>
        </>
    );
}

export default PageNotFound;