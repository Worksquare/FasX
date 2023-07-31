import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Blog from '../molecules/Blog'

const Dashboard = () => {
  const user = '/assets/user.png'
  const bikeDelivery = '/assets/bike-delivery.png'
  const vanDelivery = '/assets/van-delivery.png'

  const deliveries = [
    {
      type: 'Bike Delivery',
      image: bikeDelivery,
    },
    {
      type: 'Van Delivery',
      image: vanDelivery,
    },
  ]

  return (
    <Flex justifyContent="space-between" p="40px" gap="84px">
      <Box w="750px">
        <Flex gap={53}>
          <Box fontWeight={700} fontFamily="Inter" color="#101010">
            <Flex fontSize={24} gap={2}>
              <Text fontWeight={500}>Welcome, </Text>
              <Text>Jerry</Text>
            </Flex>

            <Text fontSize={40}>Let's take your order for today</Text>
          </Box>

          <Image src={user} alt="user" w={111} h={111} />
        </Flex>

        <Flex
          fontFamily="Inter"
          mt="40px"
          p="12px 16px"
          dropShadow="#F8F8F882"
          color="#101010"
        >
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            px="12px"
            w="187px"
          >
            <Heading fontSize="24px">Completed Orders</Heading>
            <Text fontSize="64px">0</Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            w="187px"
            px="12px"
            borderX="1px solid #ddd"
          >
            <Heading fontSize="24px">Active Orders</Heading>
            <Text fontSize="64px">0</Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            px="12px"
            w="187px"
            fontWeight="700"
          >
            <Heading fontSize="24px" w="inherit">
              Wallet Balance
            </Heading>
            <Text fontSize="64px">#0.00</Text>
          </Flex>
        </Flex>

        <Flex my="40px" gap="25px">
          {deliveries.map((delivery, index) => (
            <Box key={index} p="19px" bg="#F0F0F0" borderRadius="27px">
              <Text fontFamily="Inter" fontSize="27px" fontWeight="500">
                {delivery.type}
              </Text>
              <Flex>
                <Image src={delivery.image} w="195px" h="138px" />
              </Flex>
            </Box>
          ))}
        </Flex>

        <Button
          borderRadius="8px"
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="700"
          py="30px"
          w="inherit"
          bg="#FF8E3D"
          color="white"
        >
          Fund My Wallet
        </Button>
      </Box>

      <Blog />
    </Flex>
  )
}

export default Dashboard
