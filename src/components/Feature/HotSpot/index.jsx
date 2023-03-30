import React from "react";
import {
  HOTSPOTTEXT,
  HOTSPOTCARD1,
  HOTSPOTCARD2,
  HOTSPOTCARD3,
  HOTSPOTCARD4,
} from "@/components/Constant/ShareData";
import {
  Box,
  Icon,
  SimpleGrid,
  Text,
  Stack,
  Image,
  Heading,
  Card,
  CardBody,
  Center,
} from "@chakra-ui/react";
import Banner from "@/patterns/Banner";
import VideoPlayer from "@/patterns/VideoPlayer";
import { PageContainer } from "@/patterns/Layouts/PageContainer";
import { FaHandPointUp } from "react-icons/fa";

const breadcrumb = [
  { text: "Home", link: "/" },
  { text: "Interactive Videos", link: "/interactive-video" },
  { text: "Hot Spot", link: "features/hotspot" },
];

const HotSpot = () => {
  return (
    <>
      <Banner title="Hot Spot" breadcrumb={breadcrumb} />
      <PageContainer>
      <Box className="hidden" p={[5, 20]}>
        <SimpleGrid columns={[1, 2]} spacing={3}>
          {HOTSPOTTEXT.map((item, index) => (
            <>
              <Box key={index}>
                <VideoPlayer
                  p={10}
                  h='100%'
                  videodata={{
                    thumbnail: item.img,
                    videosrc: "https://videostori.io/v/l4/IVyEio",
                  }}
                />
              </Box>
              <Box key={index} px={10} alignItems='center'>
                <Heading pb={15} color={'gray.700'} size={['md', '2xl']}>{item.heading}</Heading>
                <Text py={10} color={"grey.300"} fontSize="md">
                  {item.paragraph1}
                </Text>
                <Text color={"grey.300"} fontSize="md">
                  {item.paragraph2}
                </Text>
              </Box>
            </>
          ))}
        </SimpleGrid>
      </Box>

      <Box className="hidden" p={[5, 20]}>
        <SimpleGrid columns={[1, 2]} spacing={3}>
          <>
            <Stack px={5}>
              {HOTSPOTCARD1.map((item, index) => (
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  boxShadow={"2xl"}
                >
                  <Center ms="5" py={2}><Icon w={100} h={100} cursor="pointer" color='red.500'>{item.icon}</Icon></Center>
                  <Stack>
                    <CardBody>
                      <Heading size="md" color={'gray.700'}>{item.heading}</Heading>
                      <Text py="2">{item.paragraph}</Text>
                    </CardBody>
                  </Stack>
                </Card>
              ))}
            </Stack>
            <Box>
              <Image src="/assets/img5.png"></Image>
            </Box>
          </>
        </SimpleGrid>
      </Box>

      <Box className="hidden" p={[5, 20]}>
        <SimpleGrid columns={[1, 2]} spacing={3}>
          <>
          <Box>
              <Image src="/assets/img5.png"></Image>
            </Box>
            <Stack px={5}>
              {HOTSPOTCARD2.map((item, index) => (
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  boxShadow={"2xl"}
                >
                  <Center ms="5" py={2}><Icon w={100} h={100} cursor="pointer" color='red.500'>{item.icon}</Icon></Center>
                  <Stack>
                    <CardBody>
                      <Heading size="md" color={'gray.700'}>{item.heading}</Heading>
                      <Text py="2">{item.paragraph}</Text>
                    </CardBody>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </>
        </SimpleGrid>
      </Box>

      <Box className="hidden" p={[5, 20]}>
        <SimpleGrid columns={[1, 2]} spacing={3}>
          <>
            <Stack px={5}>
              {HOTSPOTCARD3.map((item, index) => (
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  boxShadow={"2xl"}
                >
                  <Center ms="5" py={2}><Icon w={100} h={100} cursor="pointer" color='red.500'>{item.icon}</Icon></Center>
                  <Stack>
                    <CardBody>
                      <Heading size="md" color={'gray.700'}>{item.heading}</Heading>
                      <Text py="2">{item.paragraph}</Text>
                    </CardBody>
                  </Stack>
                </Card>
              ))}
            </Stack>
            <Box>
              <Image src="/assets/img5.png"></Image>
            </Box>
          </>
        </SimpleGrid>
      </Box>

      <Box className="hidden" p={[5, 20]}>
        <SimpleGrid columns={[1, 2]} spacing={3}>
          <>
          <Box>
              <Image src="/assets/img5.png"></Image>
            </Box>
            <Stack px={5}>
              {HOTSPOTCARD4.map((item, index) => (
                <Card
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  boxShadow={"2xl"}
                >
                  <Center ms="5" py={2}><Icon w={100} h={100} cursor="pointer" color='red.500'>{item.icon}</Icon></Center>
                  <Stack>
                    <CardBody>
                      <Heading size="md" color={'gray.700'}>{item.heading}</Heading>
                      <Text py="2">{item.paragraph}</Text>
                    </CardBody>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </>
        </SimpleGrid>
      </Box>
      </PageContainer>
    </>
  );
};

export default HotSpot;
