import React from 'react';
import Banner from '@/patterns/Banner';
import {VIDEODB} from "@/components/Constant/ShareData";
import { Box, Icon, SimpleGrid, Text, Flex, Image, Heading} from "@chakra-ui/react";
import { BsFacebook, BsWhatsapp, BsTwitter, BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaSms } from "react-icons/fa";

const ICONS = [
    {
      id: "1",
      icon: <MdEmail />,
      text: "Email",
    },
    {
      id: "2",
      icon: <FaSms />,
      text: "SMS",
    },
    {
      id: "3",
      icon: <BsWhatsapp />,
      text: "WhatsApp",
    },
    {
      id: "4",
      icon: <BsFacebook />,
      text: "Facebook",
    },
    {
      id: "5",
      icon: <BsTwitter />,
      text: "Twitter",
    },
    {
      id: "6",
      icon: <BsFillFileEarmarkSpreadsheetFill />,
      text: "Programmatic Ads",
    },
]

const breadcrumb = [
    { text: "Home", link: "/" },
    { text: "Video Distribution", link: "features/videodistribution" },
  ];

const index = () => {
  return (
    <>
        <Banner title="Video Distribution" breadcrumb={breadcrumb}/>

        <Box py={[5, 20]}>
        <SimpleGrid columns={[1, 2]} spacing={3}>
          {VIDEODB.map((item, index) => (
            <>
              <Box key={index} px={10} alignItems='center'>
                <Heading pb={15} color={'gray.700'} size={['md', '2xl']}>{item.heading}</Heading>
                <Text py={10} color={"grey.300"} fontSize="md">
                  {item.paragraph}
                </Text>
                <Text color={"grey.300"} fontSize="md">
                  {item.paragraph2}
                </Text>
              </Box> 
              <Box key={index}>
                <Image src={item.img} />
              </Box>
            </>
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Heading textAlign={"center"} color={'gray.700'}>
            Distribution Channels for
        </Heading>
        <Flex
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems="center"
          my="70px"
        >
          {ICONS.map((item) => {
            return (
              <Box
                key={item.id}
                h="160px"
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                justifyContent="center"
                w="190px"
                m="20px"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                _hover={{ bg: "black", color: "white", cursor: "pointer" }}
              >
                <Icon ms="30" boxSize={20} color="red.500">{item.icon}</Icon>
                <Text fontSize={'lg'} p={1} fontWeight={'bold'}>{item.text}</Text>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </>
  )
}

export default index