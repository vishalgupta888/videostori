import Banner from "@/patterns/Banner";
import { blogText } from "@/constants/layoutConstants";
import ImageTextTable from "../ImageTextTable";
import { Box, Flex, Text, Image, Link } from "@chakra-ui/react";

const Blog = () => {
  return (
    <>
      <Banner title="Latest Blog" />
      {/* <ImageTextTable imageTextdata={blogText} index={2} /> */}
      <Flex className='hidden' alignItems='center' justifyContent='center' direction={["column", "row"]} py={['130px','0']} h='100vh' w='100%'>
        <Box h='60%' w={['95%','40%']}>
           <Image src={blogText.imageurl} h='100%'  />
        </Box>
        <Box h='60%' w={['95%','45%']} p={['30px','60px']} boxShadow='0px 10px 60px 0px rgba(223, 223, 223, 0.5)'>
         <Box h='100%' >
          <Link as='button' mb='10px'>{blogText.category}</Link>
          <Box h='100%'>
           <Text fontSize='24px' fontWeight={'600'} lineHeight={1.4} mb='25px'>{blogText.title}</Text>
           <Text lineHeight={2}>{blogText.description}</Text>
           <Text mt='30px' fontSize={'16px'}>{blogText.authordate}</Text>
          </Box>
         </Box>
        </Box>
      </Flex>
    </>
  );
};
export default Blog;
