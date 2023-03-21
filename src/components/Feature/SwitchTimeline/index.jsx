import React from 'react';
import { SWITCHTIMELINE, SWITCHTIMELINE_CARDS1, SWITCHTIMELINE_CARDS2 } from '@/components/constant/ShareData';
import { Box, Center, SimpleGrid, Text, Stack, Image, Heading, Card, CardBody, Link, Circle, VStack} from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import Banner from '@/patterns/Banner';


const breadcrumb = [
  { text: "Home", link: "/" },
  { text: "Switch Timeline", link: "features/switchtimeline" },
];

const SwitchTimeline = () => {
  return (
    <>
      <Banner title="Switch Timeline" breadcrumb={breadcrumb}/>

      <Box p={[5, 20]}>
        <SimpleGrid columns={[1, 2]} spacing={3}>
          {SWITCHTIMELINE.map((item, index) => (
            <>
              <Box key={index}>
                <Image src={item.img} />
              </Box>
              <Box key={index} px={10} alignItems='center'>
                <Heading pb={15} color={'gray.700'} size={['md', 'lg']}>{item.heading}</Heading>
                <Text py={10} color={"grey.300"} fontSize="lg">
                  {item.paragraph1}
                </Text>
                <Text color={"grey.300"} fontSize="md">
                 <Link color="red" fontWeight={'400'}>Click here to login</Link> {item.paragraph2}
                </Text>
              </Box>
            </>
          ))}
        </SimpleGrid>
      </Box>

      <Box h="auto" bg="#fff" px={10} py={10}>
        <Box py={15}>
          <Center>
            <Heading
              color="#1b1f2e"
              mb={20}
              fontSize={{ base: "3xl", md: "5xl" }}
            >
                Switch Timeline Uses​
            </Heading>
          </Center>
        </Box>

        <SimpleGrid
          columns={[1, 5]}
          spacing={0}
          bgImage="url('http://web.msdi.in/wp-content/uploads/2022/12/work-process-line.png')"
          bgRepeat="no-repeat"
        >
          {SWITCHTIMELINE_CARDS1.map((item) => {
            return (
              <Box
                key={item?.id}
                p={[0, 4]}
                py={20}
                _hover={{ div: { color: "#2D2727"} }}
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
                  w={["auto", 250]}
                  p={3}
                  bg="#f7f7f9"
                  _hover={{ bg: "#f54444", color: "#fff" }}
                  position="relative"
                >
                  <VStack
                    color="#1b1f2e"
                    as="a"
                    _hover={{ color: "#fff" }}
                    p={5}
                  >
                    <Text fontSize="22px" my={5} fontWeight="bold">
                      {item?.heading}
                    </Text>
                    <Text fontSize="18px" fontWeight="semi-bold">
                      {item?.paragraph}
                    </Text>
                  </VStack>
                  <Box position="absolute" top="-30px">
                    <TriangleUpIcon  color="#f54444" w={8} h={8} />
                  </Box>
                </Stack>
                
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
      <Center py={10}>
        <Text fontSize="30px" color="red.400"> Timeline Switch can be used following cases</Text>
      </Center>

      <SimpleGrid columns={[1,4]} spacing={10} px={10} py={10}>
      {SWITCHTIMELINE_CARDS2.map((item, index) => {
        return(
        <Box key={index} boxShadow={'2xl'} p={5} bg={'gray.100'}>
            <Heading py={5} size={'md'} color="gray.900">{item.heading}</Heading>
            <Text size={'sm'}>{item.paragraph}</Text>
        </Box>
        );
        })}
      </SimpleGrid>
    </>
  )
}

export default SwitchTimeline