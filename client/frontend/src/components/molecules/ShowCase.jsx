import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Showcase = () => {
  const heroImage2 = "../images/heroImage2.png";
  // const heroImage = "../images/heroImage.png"
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
        borderRadius="20px"
        zIndex="3"
        ml="-40px"
        pr="50px"
        w={600}
        h={450}
        textAlign="right"
      >
        <Heading
          fontFamily="Inter"
          fontWeight="800"
          fontSize="60px"
          // lineHeight="79px"
          color="#101010"
          w="570px"
          h="156px"
        >
          Get your items <span style={{ color: "#FF0000" }}>Fast, </span> and{" "}
          <span style={{ color: "#FF0000" }}>Safe</span>
        </Heading>
        <Text
          fontWeight="400"
          fontSize="34px"
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
  );
};

export default Showcase;
