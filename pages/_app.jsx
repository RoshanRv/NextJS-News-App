import '../styles/globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div className='min-h-screen  max-h-max flex flex-col  '>
      <Nav/>
      <Component {...pageProps} />
      <Footer />
    </div>
  
  )
}

export default MyApp
