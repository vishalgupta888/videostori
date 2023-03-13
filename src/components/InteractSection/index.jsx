import React from "react";
import {
  Text,
  SimpleGrid,
  Center,
  Heading,
  Box,
  Card,
  Circle,
  Stack,
  VStack,
} from "@chakra-ui/react";

const CARDS = [
  {
    id: "Card1",
    number: "01",
    heading: "Lead Generation",
    paragraph:
      "Generate Leads directly through the Video. No more need for the customer to remember the Call to Action preventing fall-offs.",
  },
  {
    id: "Card2",
    number: "02",
    heading: "Shoppable Video",
    paragraph:
      "Type of interactive video that allows viewers to make purchases directly from the video itself",
  },
  {
    id: "Card3",
    number: "03",
    heading: "Personalization",
    paragraph:
      "Create interactive video content to meet the specific needs and preferences of individual viewers.",
  },
  {
    id: "Card4",
    number: "04",
    heading: "Gamification",
    paragraph:
      "Gamification refers to the integration of game elements and mechanics on the video to increase engagement and interaction",
  },
  {
    id: "Card5",
    number: "05",
    heading: "App Acquisition",
    paragraph:
      "acquiring new users to mobile app through various marketing activities.",
  },
  {
    id: "Card6",
    number: "06",
    heading: "Survey Quiestions",
    paragraph:
      "Conduct a survey or take feedback from the customers directly on the video in a new exciting format",
  },
];

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const InteractSection = (props) => {
  return (
    <>
      <Box h="auto" bg="#fff" px={10} py={10}>
        <Box py={20}>
          <Center>
            <Heading
              color="#1b1f2e"
              mb={5}
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              Interactive Video on Videostori
            </Heading>
          </Center>
        </Box>

        <SimpleGrid columns={[1, 6]} spacing={0}>
          {CARDS.map((item) => {
            return (
              <Box key={item?.id} p={[0, 6]} py={30}>
                <Stack py={5} alignItems={["right", "center"]}>
                  <Circle
                    size="80px"
                    border="10px solid white"
                    boxShadow="2xl"
                    bg="#f54444"
                    color="white"
                  >
                    <Text fontSize="30px" fontWeight="bold">
                      {item?.number}
                    </Text>
                  </Circle>
                </Stack>
                <Box
                  borderRadius="5px"
                  w={["auto", 200]}
                  p={4}
                  bg="#f7f7f9"
                  _hover={{ bg: "#f54444", color: "#fff" }}
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
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </>
  );
};

const styles = {
  heading: {
    color: "#1b1f2e",
    _hover: "#fff",
  },
  paragraph: {
    color: "#8394be",
  },
};

export default InteractSection;
