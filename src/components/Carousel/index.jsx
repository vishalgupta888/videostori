import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Spacer,
  Text,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = useState(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "5px" });

  const cards = [
    {
      img: "assets/img1.png",
      label: "Quit boring survey and make them interactive like never before",
      desc: "Interact with our switch timeline videos according to the interest and intent. Switch timeline is great feature where there is large amount of content and viewer has the power to define the path of the story",
      actions: 'Bringing new solutions video to the market'
    },
    {
      img: "assets/img2.png",
      label: "Now brand can use Videos to Personalize the Shopping Experience",
      desc: "Interact with our switch timeline videos according to the interest and intent. Switch timeline is great feature where there is large amount of content and viewer has the power to define the path of the story",
      actions: 'Shop till you Drop: The Evolution of Video Commerce'
    },
    {
      img: "assets/img3.png",
      label: "Use Interactive Videos and start making leads",
      desc: "Interact with our switch timeline videos according to the interest and intent. Switch timeline is great feature where there is large amount of content and viewer has the power to define the path of the story",
      actions: 'The New and Exciting way to generate Leads'
    },
    {
      img: "assets/img4.png",
      label: "Use Hotspots in your Videos and create the magic",
      desc: "Interact with our switch timeline videos according to the interest and intent. Switch timeline is great feature where there is large amount of content and viewer has the power to define the path of the story",
      actions: 'Hotspot: The new engangment tool in the Video World'
    },
    {
      img: "assets/img5.png",
      label: "Rewind and Fast-Forward",
      desc: "Interact with our switch timeline videos according to the interest and intent. Switch timeline is great feature where there is large amount of content and viewer has the power to define the path of the story",
      actions: 'Bringing new solutions video to the market'
    },
  ];

  return (
    <Box
      position={"relative"}
      height="100vh"
      width={["100%", "85%"]}
      m="0 auto"
      overflow={"hidden"}
    >
      <Heading textAlign={"center"} py={9}>
        Videostori Sample Video
      </Heading>
      <IconButton
        aria-label="left-arrow"
        colorScheme="red"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        colorScheme="red"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((item, index) => (
          <Box key={index} w="100%">
            <Flex w="100%" direction={["column-reverse", "row"]}>
              <Box display='flex' flexDirection={'column'} my={['auto']} mx={["40px","70px"]} >
              <Text
                width={["100%", "100%"]}
                fontSize={["1rem", "1.5rem"]}
                fontWeight="bolder"
              >
                {item.label}
              </Text>
              <Text
                width={["100%", "100%"]}
                py={[5,10]}
                lineHeight={'8'}
              >
                {item.desc}
              </Text>
              <Box display={'flex'} fontWeight='bold' width='100%'>
              <Icon 
              boxSize={8} 
              color='red.500'
              ><BsCheckCircle />
              </Icon>
              <Text
              px='7px'
              >
                {item.actions}
                </Text>
                </Box>
              </Box>
              <Image
                src={item.img}
                p={[10,16]}
                width={["100%", "50%"]}
                position="relative"
                backgroundSize={"cover"}
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
              />
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}