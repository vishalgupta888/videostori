import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function HeroSection() {
    return (
      <Stack minH={'135vh'} bg='#13161F' direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1} p={[4,8]} align={'center'} justify={'center'}>
          <Stack className='hidden' spacing={['50px', 8]} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
             
              <Text color={'white'} as={'span'}>
              Use Interactive videos to Increase Engagement and Conversions
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
              <Button
                bg={'white'}
                w={['50%','40%']}
                py={'27px'}
                borderRadius='0'
                color={'black'}
                _hover={{
                  bg: 'red.500',
                }}>
                Lets Get Started
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex className='hidden' flex={1}>
          <Image
            alignSelf={['none','center']}
            mx={['auto','none']}
            h={['40vh','80vh']}
            w={['90vw','40vw']}
            borderRadius={'50%'}
            alt={'Login Image'}
            objectFit={'cover'}
            src='assets/HeroImage.jpg'
          />
        </Flex>
      </Stack>
    );
  }