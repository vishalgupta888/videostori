import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import overrideTheme from '@/styles/chakraStyles/theme'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  const theme = extendTheme(overrideTheme);
  return <ChakraProvider theme={theme}>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </ChakraProvider>
}
