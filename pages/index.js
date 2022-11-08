import Head from 'next/head'
import { PageHeading } from '../components/page-heading'

export default function Home() {
  return (
        
        <>
          <Head>
            <meta name="description" content="The site aids the company to hire the best React developer candidate. Project Run Dev provides the list of best candidates for React Developers." />
            <title>Project Run Dev</title>
            {/* link to favicon now moved to _document.js */}
          </Head>
          <PageHeading title="project run dev"
            tagline="The search for your next greatest developer" />
        </>

          
  )
}

