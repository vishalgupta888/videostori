import Banner from "@/patterns/Banner";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import { BiShapeSquare } from "react-icons/bi";
import ImageTextTable from "../ImageTextTable";
import { interactText } from "@/constants/layoutConstants";
import { PageContainer } from "@/patterns/Layouts/PageContainer";

const InteractiveVideo = () => {
  const breadcrumb = [
    { text: "Home", link: "/" },
    {
      text: "Interactive Video",
      link: "/interactive-video",
      isCurrentPage: true,
    },
  ];
  const itemData = [
    {
      id: "1",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "2",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "3",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "4",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "5",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "6",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "7",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "8",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "9",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "10",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "11",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "12",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "13",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "14",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "15",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "16",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "17",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
    {
      id: "18",
      icon: <BiShapeSquare />,
      text: "Shapes",
    },
  ];
  return (
    <Box>
      <Banner title="Interactive Video" breadcrumb={breadcrumb} />
      <PageContainer>
        <ImageTextTable imageTextdata={interactText} />
        <Heading variant="headLine" textAlign={"center"}>
          Interactive video with interactive Elements
        </Heading>
        <Flex
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems="center"
          my="70px"
        >
          {itemData.map((item) => {
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
                <Box h="30px">{item.icon}</Box>
                <Text>{item.text}</Text>
              </Box>
            );
          })}
        </Flex>
      </PageContainer>
    </Box>
  );
};

export default InteractiveVideo;
