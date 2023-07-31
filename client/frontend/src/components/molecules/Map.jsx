import React from "react";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

const Map = () => {
  const map = "../images/map.png";

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
        borderRadius="20px"
        zIndex="3"
        ml="-40px"
        pr="50px"
        w="646px"
        h="507px"
      >
        <Heading
          fontFamily="Inter"
          fontWeight="800"
          fontSize="60px"
          // lineHeight="79px"
          color="#101010"
          textAlign="right"
        >
          Any <span style={{ color: "#FF0000" }}>Where</span> <br /> Any{" "}
          <span style={{ color: "#FF0000" }}>Time</span>
        </Heading>
        <Text
          fontWeight="600"
          fontSize="19px"
          fontFamily="Inter"
          lineHeight="40px"
          mt="230px"
          color="#FF0000"
        >
          Currently Only in Lagos
        </Text>
      </Flex>

      <Image
        src={map}
        alt="hero-image"
        w="850px"
        h="100%"
        borderRadius="10px"
        objectFit="cover"
      />
    </Flex>
  );
};

export default Map;
