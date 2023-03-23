import Banner from '@/patterns/Banner';
import { Box } from '@chakra-ui/react'
import React from 'react'
import { appText } from '@/constants/layoutConstants';
import ImageTextTable from '../ImageTextTable';

const AppAcquistion = () => {
  const breadcrumb = [
    { text: "Home", link: "/" },
    { text: "App Acquisition Videos", link: "/app-acquistion-videos/" },
  ];

  return (
    <Box>
      <Banner title="App Acquisition Videos" breadcrumb={breadcrumb} />
      <ImageTextTable
        isVideo={true}
        index={2}
        imageTextdata={appText}
      />
    </Box>
  )
}

export default AppAcquistion