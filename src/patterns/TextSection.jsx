import {
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react";
const TextSection = (props) => {
    const { title, description } = props;
    return (
        <Flex
            pos="relative"
            h="100%"
            bg="cardBackground"
            direction={"column"}
            justifyContent="space-around"
            {...props}
        >
            <Heading my="1em">{title}</Heading>
            <Text fontSize={["md", "lg"]} my="1em">
                {description}
            </Text>
        </Flex>
    );
};
export default TextSection;