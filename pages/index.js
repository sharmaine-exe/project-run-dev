import Head from 'next/head'

export default function Home() {
  return (
        
        <>
          <Head>
            <meta name="description" content="The site aids the company to hire the best React developer candidate. Project Run Dev provides the list of best candidates for React Developers." />
            <title>Project Run Dev</title>
            {/* link to favicon now moved to _document.js */}
          </Head>
          <header className='text-center py-[10rem] bg-rose-100'>
            <img className="w-[98px] mx-auto " src="myfavicon.svg" alt="project run dev" />
            <h1 className='text-6xl text-red-500'>project run dev</h1>
            <p className='text-xl mt-2'>The search for your next greatest developer</p>
          </header>
        </>

          
  )
}

