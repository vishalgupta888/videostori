import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  return <ChakraProvider>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </ChakraProvider>
}
