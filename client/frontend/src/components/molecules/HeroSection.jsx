import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const HeroSection = () => {
  const heroImage = "../images/heroImage.png";
  return (
    <Flex
      flexDirection={{
        sm: "column-reverse",
        xl: "row",
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
          Choose <span style={{ color: "#FF0000" }}>Fast,</span>{" "}
          <span style={{ color: "#FF0000" }}>Flexible,</span> and
          <span style={{ color: "#FF0000" }}> Reliable</span>
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
          Do you need a convenient and reliable way to book delivery services
          online?
        </Text>
      </Flex>
       
      <Image
        src={heroImage}
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

export default HeroSection;
