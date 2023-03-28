import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import overrideTheme from '@/styles/chakraStyles/theme'
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import { useEffect } from 'react'
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
  const theme = extendTheme(overrideTheme);

  useEffect(() => {
    document.addEventListener("scroll", function() {
      var pageTop = document.scrollTop();
      var pageBottom = pageTop + window.height();
      var tags = (".tag");
    
      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
    
        if (tag.position().top < pageBottom) {
          tag.addClass("visible");
        } else {
          tag.removeClass("visible");
        }
      }
    });
  }, [])
  
  
  return <ChakraProvider theme={theme}>
    <Navbar/>
    <Box className='tag'>
    <Component {...pageProps} />
    </Box>
    <Footer/>
  </ChakraProvider>
}
