import React from "react";
import {
  SWITCHTIMELINE_CARDS1,
  SWITCHTIMELINE_CARDS2,
} from "@/components/Constant/ShareData";
import {
  Box,
  Center,
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Link,
  Circle,
  VStack,
} from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import Banner from "@/patterns/Banner";
import ImageTextTable from "@/components/ImageTextTable";
import { SWITCHTIMELINE } from "@/constants/layoutConstants";
import { PageContainer } from "@/patterns/Layouts/PageContainer";

const breadcrumb = [
  { text: "Home", link: "/" },
  { text: "Interactive Videos", link: "/interactive-video" },
  { text: "Switch Timeline", link: "features/switchtimeline" },
];

const SwitchTimeline = () => {
  return (
    <>
      <Banner title="Switch Timeline" breadcrumb={breadcrumb} />
      <PageContainer>
      {SWITCHTIMELINE.map((SWITCHTIMELINE, index) => {
          return  <ImageTextTable
            isVideo={true} 
            index={index} 
            imageTextdata={SWITCHTIMELINE} 
          />;
        })}

        <Box className="hidden" h="auto" bg="#fff" px={10}>
          <Box py={10}>
            <Center>
              <Heading
                color="#1b1f2e"
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                Switch Timeline Uses​
              </Heading>
            </Center>
          </Box>

        <Center py={6} px={10}>
          <Text fontSize="30px" color="red.400">
            {" "}
            Timeline Switch can be used following cases
          </Text>
        </Center>

        <SimpleGrid className="hidden" columns={[1, 4]} spacing={10} px={10} py={10}>
          {SWITCHTIMELINE_CARDS2.map((item, index) => {
            return (
              <Box
                key={item?.id}
                py={[10]}
                _hover={{ div: { color: "#2D2727" } }}
                transform={index % 2 === 1 ? (index === 1 ? "translateY(25px)" : "translateY(-35px)") : ""}
              >
                <Stack pb={8} alignItems={["right", "center"]}>
                  <Circle
                    size="80px"
                    border="10px solid white"
                    boxShadow="2xl"
                    bg="#f7f7f9"
                    color="#f54444"
                  >
                    <Text fontSize="30px" fontWeight="bold">
                      {item?.number}
                    </Text>
                  </Circle>
                </Stack>

                <Stack
                  borderRadius="5px"
                  w={["auto", 230]}
                  p={3}
                  bg="#f7f7f9"
                  _hover={{ bg: "#f54444", color: "#fff" }}
                  position="relative"
                >
                  <VStack
                    color="#1b1f2e"
                    as="a"
                    _hover={{ color: "#fff" }}
                    p={1}
                  >
                    <Text fontSize="18px" my={5} fontWeight="bold">
                      {item?.heading}
                    </Text>
                    <Text fontSize="16px">
                      {item?.paragraph}
                    </Text>
                  </VStack>
                  <Box position="absolute" top="-30px">
                    <TriangleUpIcon color="#f54444" w={8} h={8} />
                  </Box>
                </Stack>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>

      <Center pt={20} px={10}>
        <Text fontSize="30px" color="red.400">
          {" "}
          Timeline Switch can be used following cases
        </Text>
      </Center>

      <SimpleGrid className="hidden" columns={[1, 4]} spacing={10} px={10} py={10}>
        {SWITCHTIMELINE_CARDS2.map((item, index) => {
          return (
            <Box key={index} boxShadow={"2xl"} p={5} bg={"white.400"}>
              <Heading py={5} size={"md"} color="gray.900">
                {item.heading}
              </Heading>
              <Text size={"sm"}>{item.paragraph}</Text>
            </Box>
          );
        })}
      </SimpleGrid>
      </PageContainer>
    </>
  );
};

export default SwitchTimeline;
