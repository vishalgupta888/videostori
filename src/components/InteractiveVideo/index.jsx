import Banner from "@/patterns/Banner";
import VideoPlayer from "@/patterns/VideoPlayer";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import { BiShapeSquare } from "react-icons/bi";

const InteractiveVideo = () => {
  const breadcrumb = [
    { text: "Home", link: "/" },
    { text: "Interactive Video", link: "/interactive-video" },
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
      <Flex w="100%" h="600px">
        <Box w="50%" h="100%">
          <VideoPlayer
            h="100%"
            w="100%"
            m="auto"
            videodata={{
              thumbnail:
                "http://web.msdi.in/wp-content/uploads/2023/02/Screenshot-2023-02-27-154922.png",
              videosrc: "https://videostori.io/v/l1/IVx5Y2",
            }}
          />
        </Box>
        <Box w="50%"></Box>
      </Flex>

      <Flex
        minH="80vh"
        flexDir={["column", "row"]}
        justifyContent={"space-around"}
        alignItems="center"
        my="30px"
      >
        <Box w={["80vw", "40vw"]}>
          <Heading fontSize={"24px"}>
            Unlocking the Interactive Potential: Creating Dynamic Video
            Experiences for Enhanced Customer Engagement
          </Heading>
          <Text fontSize={"18px"} p="30px 0">
            interactive videos to create a more dynamic customer engagement
            experience. By incorporating clickable elements, such as product
            information or customer reviews, viewers can easily navigate through
            the video and gain a deeper understanding of your brand or product.
            Additionally, interactive videos can be used for gamification,
            quizzes, and other interactive features that increase engagement and
            improve learning outcomes. Interactive videos are an exciting way to
            captivate your audience and provide a more memorable and effective
            learning or customer experience. Whether you’re an educator,
            trainer, or business owner, interactive videos can help you enhance
            your content and stand out from the competition.
          </Text>
        </Box>
        <Image h="400px" src="assets/interactive.png" />
      </Flex>
      <Box>
        <Heading textAlign={"center"}>
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
      </Box>
    </Box>
  );
};

export default InteractiveVideo;
