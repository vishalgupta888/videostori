import React from 'react';
import Banner from '@/patterns/Banner';
import {REPORTCARDS} from "@/components/Constant/ShareData";
import {REPORTSAN, REPORTANALYTICS} from "@/constants/layoutConstants";
import ImageTextTable from "@/components/ImageTextTable";
import { Box, Center, SimpleGrid, Text, Flex, Image, Heading, Card, CardBody, color} from "@chakra-ui/react";

const breadcrumb = [
    { text: "Home", link: "/" },
    { text: "Reports-Analytics", link: "features/reportsanalytics" },
  ];


const index = () => {
  return (
    <>
     <Banner title="Reports-Analytics" breadcrumb={breadcrumb}/>
     <Box>
        {REPORTSAN.map((REPORTSAN, index) => {
          return  <ImageTextTable
            index={1} 
            imageTextdata={REPORTSAN} 
          />;
        })}
      </Box>

      <Center py={10} px={10}>
        <Heading color="gray.700"> Channel-Specific Analytics</Heading>
      </Center>

      <SimpleGrid columns={[1,4]} spacing={10} px={10} py={15}>
      {REPORTCARDS.map((item, index) => {
        return(
        <Box key={index} textAlign="center" boxShadow={'xl'} p={5} bg={'white.100'} _hover={{ bgImage: "http://web.msdi.in/wp-content/uploads/2023/01/info_hover_bg.jpg", color: "white", cursor: "pointer" }}>
            <Text py={5} fontSize={20} fontWeight='bold'>{item.heading}</Text>
            <Text size={'sm'}>{item.paragraph}</Text>
        </Box>
        );
        })}
      </SimpleGrid>

      <Box>
      {REPORTANALYTICS.map((REPORTANALYTICS, index) => {
          return  <ImageTextTable
            index={2} 
            imageTextdata={REPORTANALYTICS} 
          />;
        })}
    </Box>
    </>
  )
}

export default index