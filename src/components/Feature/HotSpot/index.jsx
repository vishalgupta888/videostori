import React from "react";
import { HOTSPOTCARD1, HOTSPOTCARD2, HOTSPOTCARD3, HOTSPOTCARD4} from "@/components/Constant/ShareData";
import { Box, Icon, SimpleGrid, Text, Stack, Image, Heading, Card, CardBody, Center,
} from "@chakra-ui/react";
import Banner from "@/patterns/Banner";
import ImageTextTable from "@/components/ImageTextTable";
import { HOTSPOTTEXT } from "@/constants/layoutConstants";
import { PageContainer } from "@/patterns/Layouts/PageContainer";

const breadcrumb = [
  { text: "Home", link: "/" },
  { text: "Features"},
  { text: "Hot Spot", link: "features/hotspot" },
];

const HotSpot = () => {
  return (
    <>
      <Banner title="Hot Spot" breadcrumb={breadcrumb} />
      <PageContainer>
        {HOTSPOTTEXT.map((HOTSPOTTEXT, index) => {
          return  <ImageTextTable
            isVideo={true} 
            index={index} 
            imageTextdata={HOTSPOTTEXT} 
          />;
        })}

      <Box p={[5, 20]}>
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

      <Box p={[5, 20]}>
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

      <Box p={[5, 20]}>
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

      <Box p={[5, 20]}>
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
