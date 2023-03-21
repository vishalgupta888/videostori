import {
    Box,
    ListItem,
    Flex,
    Heading,
    Text,
    UnorderedList
} from "@chakra-ui/react";
const TextSection = (props) => {
    const { title, description, listitem, cta, ctatitle } = props;
    return (
        <Flex
            pos="relative"
            h="100%"
            bg="cardBackground"
            direction={"column"}
            textAlign="center"
            justifyContent="space-around"
            {...props}
        >
            <Heading my="1em">{title}</Heading>
            <Text fontSize={["md", "xl"]} my="1em">
                {description}
            </Text>
            <UnorderedList p={6}>
                {listitem &&
                    listitem.map((item, index) => (
                        <ListItem
                            textAlign="justify"
                            key={index + "li_" + item}
                            fontWeight="bold"
                        >
                            {item}
                        </ListItem>
                    ))}
            </UnorderedList>
            {cta && (
                <Box mx="auto" my="1em">
                    {ctatitle && (
                        <Text
                            fontStyle="italic"
                            fontWeight={500}
                            fontSize={["md", "xl"]}
                        >
                            {ctatitle}
                        </Text>
                    )}

                </Box>
            )}
        </Flex>
    );
};
export default TextSection;