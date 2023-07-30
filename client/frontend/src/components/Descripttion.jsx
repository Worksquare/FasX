import React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'

const Description = () => {
  const van = '/assets/van.png'
  const track = '/assets/track.png'
  const clock = '/assets/clock.png'

  const descriptions = [
    {
      imageUrl: van,
      text: 'Send and Pickup any item with us',
    },
    {
      imageUrl: track,
      text: 'Track your items and be in touch',
    },
    {
      imageUrl: clock,
      text: 'Get your items right on time',
    },
  ]
  return (
    <Flex
      bg="#BABABA"
      px="120px"
      alignItems="center"
      justifyContent="space-between"
    >
      {descriptions.map((descrption, index) => (
        <Flex key={index} alignItems="center">
          <Image src={descrption.imageUrl} />
          <Text
            color="white"
            fontFamily="Colfax"
            fontWeight="500"
            fontSize="16px"
          >
            {descrption.text}
          </Text>
        </Flex>
      ))}
    </Flex>
  )
}

export default Description
