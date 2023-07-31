import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const Rider = () => {
  const motorbike = "../images/motorbike.png";

  return (
    <Flex
      flexDirection="row-reverse"
      alignItems="center"
      justifyContent="center"
      px="120px"
      my="70px"
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
        h="600px"
        textAlign="right"
      >
        <Heading
          fontFamily="Inter"
          fontWeight="800"
          fontSize="60px"
          // lineHeight="79px"
          color="#101010"
        >
          Become a <span style={{ color: "#FF0000" }}>Rider</span> today
        </Heading>
        <Link href="/signup">
          <Text
            fontWeight="400"
            fontSize="30px"
            fontFamily="Inter"
            lineHeight="40px"
            mt="289px"
            pl="70px"
            color="#D85B00"
          >
            SignUp
          </Text>
        </Link>
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
  );
};

export default Rider;
