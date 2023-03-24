import { Flex, Heading, Text } from "@chakra-ui/react";
const TextSection = (props) => {
  const { title, description } = props;
  return (
    <Flex
      pos="relative"
      h="100%"
      bg="cardBackground"
      direction={"column"}
      textAlign="left"
      justifyContent="space-around"
      {...props}
    >
      <Heading variant={"headLine"} my="1em">
        {title}
      </Heading>
      <Text variant={"body"} my="1em">
        {description}
      </Text>
    </Flex>
  );
};
export default TextSection;
