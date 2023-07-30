import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Showcase = () => {
  const heroImage2 = '../images/heroImage2.png'
  return (
    <Flex
      flexDirection="row-reverse"
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
        ml="-40px"
        pr="50px"
        w={614}
        h={450}
      >
        <Heading
          fontFamily="Inter"
          fontWeight="800"
          fontSize="60px"
          // lineHeight="79px"
          color="#101010"
        >
          Get your items Fast and Safe
        </Heading>
        <Text
          fontWeight="400"
          fontSize="36px"
          fontFamily="Inter"
          lineHeight="40px"
          mt="40px"
        >
          Be rest assured that your package are in safe hands and would surely
          get to you on time.
        </Text>
      </Flex>

      <Image
        src={heroImage2}
        alt="hero-image"
        w="850px"
        h="500px"
        borderRadius="10px"
        objectFit="cover"
      />
    </Flex>
  )
}

export default Showcase
