import '../styles/globals.css'
import '../styles/header.css'
import '../styles/footer.css'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
 
  )
}

export default MyApp
