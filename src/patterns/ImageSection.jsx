import { Box, Image } from "@chakra-ui/react";
const ImageSection = ({ imgSrc, ...props }) => {
    return <Image objectFit={"contain"} {...props} src={imgSrc} />;
};
export default ImageSection;