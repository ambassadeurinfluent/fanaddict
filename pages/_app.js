import '../styles/globals.css'
import '../styles/header.css'
import '../styles/footer.css'
import Head from 'next/head'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fan Addict</title>
        <meta name="description" content="Créez votre nouvelle source de revenue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
 
  )
}

export default MyApp
