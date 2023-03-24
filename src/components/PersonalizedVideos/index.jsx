import Banner from "@/patterns/Banner";
import { Box } from "@chakra-ui/react";
import React from "react";
import { perText } from "@/constants/layoutConstants";
import ImageTextTable from "../ImageTextTable";
import { PageContainer } from "@/patterns/Layouts/PageContainer";

const PersonalizedVideos = () => {
  const breadcrumb = [
    { text: "Home", link: "/" },
    { text: "Interactive Video", link: "/interactive-video" },
    {
      text: "Personalized Videos",
      link: "/interactive-video/personalized-videos/",
    },
  ];
  return (
    <Box>
      <Banner title="Personalized Videos" breadcrumb={breadcrumb} />
      <PageContainer>
        {perText.map((perData, index) => {
          return <ImageTextTable index={index} imageTextdata={perData} />;
        })}
      </PageContainer>
    </Box>
  );
};

export default PersonalizedVideos;
