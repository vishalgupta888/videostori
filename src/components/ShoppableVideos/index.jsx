import Banner from "@/patterns/Banner";
import { Box } from "@chakra-ui/react";
import React from "react";
import { shopText } from "@/constants/layoutConstants";
import ImageTextTable from "../ImageTextTable";
import { PageContainer } from "@/patterns/Layouts/PageContainer";

const ShoppableVideos = () => {
  const breadcrumb = [
    { text: "Home", link: "/" },
    { text: "Interactive Video", link: "/interactive-video" },
    { text: "Shoppable Videos", link: "/interactive-video/shoppable-videos/" },
  ];

  return (
    <Box>
      <Banner title="Shoppable Videos" breadcrumb={breadcrumb} />
      <PageContainer>
        <ImageTextTable imageTextdata={shopText} />
      </PageContainer>
    </Box>
  );
};

export default ShoppableVideos;
