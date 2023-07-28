import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box bg="#454545">
        <Box>
          <Heading>Newsletter</Heading>
          <Text>Get the latest news about our services and products</Text>
          <InputGroup size="md">
            <Input pr="4.5rem" type="search" placeholder="Enter password" />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm">
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>

      <Flex
        flexDirection="column"
        py="20px"
        color="#929292"
        alignItems="center"
        justifyContent="center"
        bg="#101010"
      >
        <Heading>FastX</Heading>
        <Text>Copyright 2023</Text>
      </Flex>
    </>
  )
}

export default Footer
