import React from "react";
import Banner from "@/patterns/Banner";
import { REPORTCARDS } from "@/components/Constant/ShareData";
import { REPORTSAN, REPORTANALYTICS } from "@/constants/layoutConstants";
import ImageTextTable from "@/components/ImageTextTable";
import { PageContainer } from "@/patterns/Layouts/PageContainer";
import {
  Box,
  Center,
  SimpleGrid,
  Text,
  Flex,
  Image,
  Heading,
  Card,
  CardBody,
  color,
} from "@chakra-ui/react";

const breadcrumb = [
  { text: "Home", link: "/" },
  { text: "Interactive Videos", link: "/interactive-video" },
  { text: "Reports-Analytics", link: "features/reportsanalytics" },
];

const index = () => {
  return (
    <>
      <Banner title="Reports-Analytics" breadcrumb={breadcrumb} />
      <PageContainer>
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

        <Center py={10} px={10}>
          <Heading color="gray.700"> Channel-Specific Analytics</Heading>
        </Center>

        <SimpleGrid className="hidden" columns={[1, 4]} spacing={10} px={10} py={15}>
          {REPORTCARDS.map((item, index) => {
            return (
              <Box
                key={index}
                textAlign="center"
                boxShadow={"xl"}
                p={5}
                bg={"white.100"}
                _hover={{
                  bgImage:
                    "http://web.msdi.in/wp-content/uploads/2023/01/info_hover_bg.jpg",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <Text py={5} fontSize={20} fontWeight="bold">
                  {item.heading}
                </Text>
                <Text size={"sm"}>{item.paragraph}</Text>
              </Box>
            );
          })}
        </SimpleGrid>

        <Box className="hidden" py={[5, 20]}>
          <SimpleGrid columns={[1, 2]} spacing={3}>
            {REPORTANALYTICS.map((item, index) => (
              <>
                <Box key={index}>
                  <Image src={item.imageurl} />
                </Box>
                <Box key={index} px={10} alignItems="center">
                  <Text
                    py={8}
                    fontSize={"lg"}
                    fontWeight={"bold"}
                    color={"red.500"}
                  >
                    Insights
                  </Text>
                  <Heading pb={15} color={"gray.700"} size={["md", "2xl"]}>
                    {item.title}
                  </Heading>
                  <Text py={10} color={"grey.300"} fontSize="md">
                    {item.description}
                  </Text>
                </Box>
              </>
            ))}
          </SimpleGrid>
        </Box>
      </PageContainer>
    </>
  );
};

export default index;
