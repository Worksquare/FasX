import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Showcase = () => {
  const heroImage2 = "../images/heroImage2.png";
  return (
    <Flex
    flexDirection={{
      sm: "column-reverse",
      xl: "row-reverse",
    }}
    alignItems="center"
    justifyContent="center"
    px={{
      sm: "0",
      xl: "120px",
    }}
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
        mr={{
          sm: "0",
          xl: "-40px",
        }}
        pr={{
          sm: "0",
          xl: "50px",
        }}
        w={{
          sm: "354px",
          xl: "614px",
        }}
        h={450}
        textAlign="right"
      >
        <Heading
           fontFamily="Inter"
           fontWeight="800"
           fontSize={{
             sm: "40px",
             xl: "60px",
           }}
           textAlign={{
             sm: "center",
             xl: "center",
           }}
           color="#101010"
        >
          Get your items <span style={{ color: "#FF0000" }}>Fast, </span> and{" "}
          <span style={{ color: "#FF0000" }}>Safe</span>
        </Heading>
        <Text
           fontWeight="400"
           fontSize={{
             sm: "16px",
             xl: "30px",
           }}
           fontFamily="Inter"
           lineHeight={{
             sm: "20px",
             xl: "40px",
           }}
           w={{
             sm: "297px",
             xl: "400px"
           }}
           mt={{
             sm: "17px",
             xl: "40px",
           }}
           textAlign={{
             sm: "center",
             xl: "center",
           }}
        >
          Be rest assured that your package are in safe hands and would surely
          get to you on time.
        </Text>
      </Flex>

      <Image
        src={heroImage2}
        alt="hero-image"
        w={{
          sm: "100%",
          xl: "850px",
        }}
        h={{
          sm: "311px",
          xl: "500px",
        }}
        borderRadius="10px"
        objectFit="cover"
      />
    </Flex>
  );
};

export default Showcase;
