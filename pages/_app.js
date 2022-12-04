import Head from 'next/head'
import DefaultLayout from '../components/layouts/DefaultLayout'
import '../styles/global.css'

//compiles
function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)
  return (
    <DefaultLayout>
      {getLayout(
        <Component {...pageProps} /> 
      )}
    </DefaultLayout>
  )
}

export default MyApp
