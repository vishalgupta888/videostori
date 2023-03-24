import VideoPlayer from "@/patterns/VideoPlayer";
import { Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import ImageSection from "../../patterns/ImageSection";
import TextSection from "../../patterns/TextSection";

const ImageTextTable = ({ imageTextdata, isVideo, index }) => {
    const ref = useRef(null);

    return (
        <Flex
            minH={["auto", "100vh"]}
            w="100%"
            direction={["column", "row"]}
            justifyContent="space-around"
            p="2vw"
            ref={ref}
        >
          { isVideo ? <VideoPlayer
                p={10}
                width={["100%", "40%"]}
                height={["35vh","50vh"]}
                alignSelf="center"
                videodata={{
                  thumbnail: imageTextdata.thumb,
                  videosrc: imageTextdata.src,
                }}
              /> :  <ImageSection
                w={["100%", "50%"]}
                h={"auto"}
                order={[1, index % 2 === 0 ? 1 : 2]}
                imgSrc={imageTextdata.imageurl}
                py={[5, 0]}
                px={[0, 10]}
            />}
            <TextSection
                w={["100%", "50%"]}
                order={[2, index % 2 === 0 ? 2 : 1]}
                {...imageTextdata}
                p={[5, 10]}
            />
        </Flex>
    );
};

export default ImageTextTable;