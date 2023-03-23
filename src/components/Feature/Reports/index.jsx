import React from "react";
import Banner from "@/patterns/Banner";
import {
  REPORTSAN,
  REPORTCARDS,
  REPORTANALYTICS,
} from "@/components/Constant/ShareData";
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
import { PageContainer } from "@/patterns/Layouts/PageContainer";

const breadcrumb = [
  { text: "Home", link: "/" },
  { text: "Reports-Analytics", link: "features/reportsanalytics" },
];

const index = () => {
  return (
    <>
      <Banner title="Reports-Analytics" breadcrumb={breadcrumb} />
      <PageContainer>
        <Box py={[5, 20]}>
          <SimpleGrid columns={[1, 2]} spacing={3}>
            {REPORTSAN.map((item, index) => (
              <>
                <Box key={index} px={10} alignItems="center">
                  <Heading pb={15} color={"gray.700"} size={["md", "2xl"]}>
                    {item.heading}
                  </Heading>
                  <Text py={10} color={"grey.300"} fontSize="md">
                    {item.paragraph}
                  </Text>
                </Box>
                <Box key={index}>
                  <Image src={item.img} />
                </Box>
              </>
            ))}
          </SimpleGrid>
        </Box>

        <Center py={10}>
          <Heading color="gray.700"> Channel-Specific Analytics</Heading>
        </Center>

        <SimpleGrid columns={[1, 4]} spacing={10} px={10} py={20}>
          {REPORTCARDS.map((item, index) => {
            return (
              <Box
                key={index}
                boxShadow={"2xl"}
                p={5}
                bg={"gray.100"}
                _hover={{ bg: "blue.400", color: "white", cursor: "pointer" }}
              >
                <Heading py={5} size={"md"} color="gray.900">
                  {item.heading}
                </Heading>
                <Text size={"sm"}>{item.paragraph}</Text>
              </Box>
            );
          })}
        </SimpleGrid>

        <Box py={[5, 20]}>
          <SimpleGrid columns={[1, 2]} spacing={3}>
            {REPORTANALYTICS.map((item, index) => (
              <>
                <Box key={index}>
                  <Image src={item.img} />
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
                    {item.heading}
                  </Heading>
                  <Text py={10} color={"grey.300"} fontSize="md">
                    {item.paragraph}
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
