import Head from 'next/head'
import DefaultLayout from '../components/layouts/DefaultLayout'
import '../styles/global.css'

//compiles
function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <meta name="description" content="The site aids the company to hire the best React developer candidate. Project Run Dev provides the list of best candidates for React Developers." />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
    </>
  )
}

export default MyApp
