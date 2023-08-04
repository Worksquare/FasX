import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const HeroSection = () => {
  const heroImage = '../immages/heroImage.png'

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      px="120px"
      my="40px"
      position="relative"
    >
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg="#F8F8F8"
        borderRadius="10px"
        zIndex="3"
        mr="-40px"
        pr="50px"
        w={614}
        h={450}
      >
        {/* <Heading
          fontFamily="Inter"
          fontWeight="800"
          fontSize="60px"
          // lineHeight="79px"
          color="#101010"
        >
          Choose
          <Box as="span" display="block" color="#FF0000">
            Fast
          </Box>
          ,
          <Box as="span" display="block" color="#FF0000">
            Flexible
          </Box>
          and
          <Box as="span" display="block" color="#FF0000">
            Reliable
          </Box>
        </Heading> */}
        <Heading
          fontFamily="Inter"
          fontWeight="800"
          fontSize="60px"
          // lineHeight="79px"
          color="#101010"
        >
          Choose Fast, Flexible and Reliable
        </Heading>

        <Text
          fontWeight="400"
          fontSize="36px"
          fontFamily="Inter"
          lineHeight="40px"
          mt="40px"
        >
          Do you need a convenient and reliable way to book delivery services
          online?
        </Text>
      </Flex>

      <Image
        src={heroImage}
        alt="hero-image"
        w="800px"
        h="500px"
        borderRadius="10px"
        objectFit="cover"
      />
    </Flex>
  )
}

export default HeroSection
