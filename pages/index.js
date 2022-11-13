import Head from 'next/head'
import { PageHeading } from '../components/page-heading'
import { NavBar } from './../components/navigation'

export default function Home() {
  return (
        
        <>
          <Head>
            
            <title>Project Run Dev</title>
            {/* link to favicon now moved to _document.js */}
          </Head>
          <PageHeading 
            title="project run dev"
            tagline="The search for your next greatest developer" />
          <main>
            
          </main>
        </>

          
  )
}

