import Banner from "@/patterns/Banner";
import { Box } from "@chakra-ui/react";
import React from "react";
import ImageTextTable from "../ImageTextTable";
import { customerText } from "@/constants/layoutConstants";
import { PageContainer } from "@/patterns/Layouts/PageContainer";

const CustomerSurvey = () => {
  const breadcrumb = [
    { text: "Home", link: "/" },
    { text: "Interactive Video", link: "/interactive-video" },
    {
      text: "Customer Survey Videos",
      link: "/interactive-video/customer-survey-videos/",
    },
  ];
  return (
    <Box>
      <Banner title="Customer Survey Videos" breadcrumb={breadcrumb} />
      <PageContainer>
        <ImageTextTable isVideo={true} index={2} imageTextdata={customerText} />
      </PageContainer>
    </Box>
  );
};

export default CustomerSurvey;
