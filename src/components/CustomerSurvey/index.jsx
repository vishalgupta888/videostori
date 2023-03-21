import Banner from '@/patterns/Banner'
import { Box } from '@chakra-ui/react'
import React from 'react'
import ImageTextTable from '../ImageTextTable';
import { customerText } from '@/constants/layoutConstants';

const CustomerSurvey = () => {
    const breadcrumb = [
        { text: "Home", link: "/" },
        { text: "Interactive Video", link: "/interactive-video" },
        { text: "Customer Survey Videos", link: "/interactive-video/customer-survey-videos/" },
      ];
  return (
    <Box>
         <Banner title="Customer Survey Videos" breadcrumb={breadcrumb} />
         <ImageTextTable
         index={2}
                  imageTextdata={customerText}
                  />
    </Box>
  )
}

export default CustomerSurvey