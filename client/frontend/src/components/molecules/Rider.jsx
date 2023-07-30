import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Rider = () => {
  const motorbike = '../images/motorbike.png'

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
          Become a Rider today
        </Heading>
        <Text
          fontWeight="400"
          fontSize="36px"
          fontFamily="Inter"
          lineHeight="40px"
          mt="40px"
        >
          SignUp
        </Text>
      </Flex>

      <Image
        src={motorbike}
        alt="hero-image"
        w="850px"
        h="100%"
        borderRadius="10px"
        objectFit="cover"
      />
    </Flex>
  )
}

export default Rider
