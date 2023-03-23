import Banner from "@/patterns/Banner";
import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import React from "react";
import FeatureSection from "../FeatureSection";
import { leadText } from "@/constants/layoutConstants";
import ImageTextTable from "../ImageTextTable";
import { PageContainer } from "@/patterns/Layouts/PageContainer";

const LeadGeneration = () => {
  const breadcrumb = [
    { text: "Home", link: "/" },
    { text: "Interactive Video", link: "/interactive-video" },
    {
      text: "Lead Generations Videos",
      link: "/interactive-video/lead-generation-videos/",
    },
  ];

  return (
    <Box>
      <Banner title="Lead Generations Videos" breadcrumb={breadcrumb} />
      <PageContainer>
        {leadText.map((leadData, index) => {
          return <ImageTextTable index={index + 1} imageTextdata={leadData} />;
        })}
        <FeatureSection />
      </PageContainer>
    </Box>
  );
};

export default LeadGeneration;
