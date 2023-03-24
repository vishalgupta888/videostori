import Banner from '@/patterns/Banner';
import { Box, Flex, Text, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import FeatureSection from '../FeatureSection'
import { leadText } from '@/constants/layoutConstants';
import ImageTextTable from '../ImageTextTable';

const LeadGeneration = () => {
    const breadcrumb = [
        { text: "Home", link: "/" },
        { text: "Interactive Video", link: "/interactive-video" },
        { text: "Lead Generations Videos", link: "/interactive-video/lead-generation-videos/" },
      ];

    return (
        <Box>
         <Banner title="Lead Generations Videos" breadcrumb={breadcrumb} />
            {/* <Flex minH='80vh' flexDir={['column', 'row']} justifyContent={'space-around'} alignItems='center' my='70px' mx={['0','70px']} flexWrap={'wrap'} >
                <Box w={['80vw', '40vw']}>
                    <Heading fontSize={'28px'}>Generate High Quality Leads with Interactive Video
                    </Heading>
                    <Text fontSize={'18px'} p='30px 0'>interactive videos to create a more dynamic customer engagement experience. By incorporating clickable elements, such as product information or customer reviews, viewers can easily navigate through the video and gain a deeper understanding of your brand or product. Additionally, interactive videos can be used for gamification, quizzes, and other interactive features that increase engagement and improve learning outcomes.

                        Interactive videos are an exciting way to captivate your audience and provide a more memorable and effective learning or customer experience. Whether you’re an educator, trainer, or business owner, interactive videos can help you enhance your content and stand out from the competition.</Text>
                </Box>
                <Image
                    h='360px'
                    src='/assets/lead1.jpg'
                />
                <Image
                    h='500px'
                    src='/assets/lead2.png'
                />
                <Box w={['80vw', '40vw']}>
                    <Text fontSize={'18px'} p='30px 0'>There are many advantages of using Interactive Video for lead generations such as:

                        There can be different interactive Videos for different target audience
                        Customer insights can help you change the positioning of hotspots on the fly thus leading to increased conversions
                        There is no fall-offs since the landing page is within the Video itself
                        Interactive Videos can engage attention higher than Linear Videos
                        Videostori platform helps you convert linear videos to Interactive Lead Generation Videos. Click here to Try</Text>
                </Box>
            </Flex> */}
            {leadText.map((leadData, index)=>{
                return <ImageTextTable
                  index={index +  1}
                  imageTextdata={leadData}
                />
            })}
            <FeatureSection/>
        </Box>
    )
}

export default LeadGeneration