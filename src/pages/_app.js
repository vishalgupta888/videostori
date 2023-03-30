import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SEO from '../../next-seo.config';
import SEOContainer from '@/services/SEOContainer'
import overrideTheme from '@/styles/chakraStyles/theme'
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import { useEffect } from 'react'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  const theme = extendTheme(overrideTheme);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } 
      })
    })
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))
  })


  return <ChakraProvider theme={theme}>

    <Navbar />
    <Box>
    <SEOContainer seoData={SEO}/>
      <Component {...pageProps} />
    </Box>
    <Footer />
  </ChakraProvider>
}
