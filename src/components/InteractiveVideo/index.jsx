import Banner from "@/patterns/Banner";
import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { BiShapeSquare } from "react-icons/bi";
import { AiOutlineQuestionCircle, AiOutlineBarChart } from "react-icons/ai";
import { MdOutlineShapeLine, MdOutlineMarkEmailRead } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { BsHandIndexThumb,BsQuestionLg, BsChatLeft} from "react-icons/bs";
import { FaRegImages,FaTextWidth,FaWpforms,FaShoppingBag, FaHandPointUp,FaRegFileVideo, FaRegFileImage,FaCcApplePay, FaLanguage, FaRoute} from "react-icons/fa";
import ImageTextTable from "../ImageTextTable";
import { interactText } from "@/constants/layoutConstants";

const InteractiveVideo = () => {
  const breadcrumb = [
    { text: "Home", link: "/" },
    { text: "Interactive Video", link: "/interactive-video" },
  ];
  const itemData = [
    {
      id: "1",
      icon: MdOutlineShapeLine,
      text: "Shapes",
    },
    {
      id: "2",
      icon: FaRegImages,
      text: "Image",
    },
    {
      id: "3",
      icon: FaTextWidth,
      text: "Text",
    },
    {
      id: "4",
      icon: BsHandIndexThumb,
      text: "Button",
    },
    {
      id: "5",
      icon: FaWpforms,
      text: "Form",
    },
    {
      id: "6",
      icon: AiOutlineQuestionCircle,
      text: "MultiChoice",
    },
    {
      id: "7",
      icon: FaRoute,
      text: "Switch Timeline",
    },
    {
      id: "8",
      icon: FaShoppingBag,
      text: "Shoppable",
    },
    {
      id: "9",
      icon: BsQuestionLg,
      text: "Custom Poll",
    },
    {
      id: "10",
      icon: AiOutlineBarChart,
      text: "Lead Generation",
    },
    {
      id: "11",
      icon: FaHandPointUp,
      text: "Click Capture",
    },
    {
      id: "12",
      icon: FaRegFileVideo,
      text: "Switch Video",
    },
    {
      id: "13",
      icon: FaRegFileImage,
      text: "Open Image",
    },
    {
      id: "14",
      icon: BsChatLeft,
      text: "Feedback",
    },
    {
      id: "15",
      icon: IoIosCall,
      text: "Call in Video",
    },
    {
      id: "16",
      icon: MdOutlineMarkEmailRead,
      text: "Email in Video",
    },
    {
      id: "17",
      icon: FaCcApplePay,
      text: "Download App",
    },
    {
      id: "18",
      icon: FaLanguage,
      text: "Language Selection",
    },
  ];
  return (
    <Box>
      <Banner title="Interactive Video" breadcrumb={breadcrumb} />
      <ImageTextTable imageTextdata={interactText} />
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
                h={["130px","160px"]}
                w={["140px","175px"]}
                display="flex"
                flexDirection={"column"}
                alignItems="center"
                justifyContent="center"
                m="15px"
                boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                _hover={{ bg: "black", color: "white", cursor: "pointer" }}
              >
                <Icon
                  cursor={"pointer"}
                  as={item.icon}
                  boxSize={[42,70]}
                  fill="red"
                  mb={5}
                  _hover={{ fill: 'white'}}
                />               
                 <Text textAlign={'center'}>{item.text}</Text>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default InteractiveVideo;