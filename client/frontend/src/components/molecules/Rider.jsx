import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const Rider = () => {
  const motorbike = "../images/motorbike2.png";

  return (
    <Flex
    flexDirection={{
      sm: "column",
      xl: "row-reverse",
    }}
    alignItems="center"
    justifyContent="center"
    px={{
      sm: "0",
      xl: "120px",
    }}
    >
      <Image
        src={motorbike}
        alt="hero-image"
        w={{
          sm: "100%",
          xl: "850px",
        }}
        h={{
          sm: "404px",
          xl: "800px",
        }}
        borderRadius="10px"
        objectFit="cover"
      />
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        bg="#F8F8F8"
        borderRadius="10px"
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
          Become a{" "}
          <span style={{ color: "#FF0000" }}>
            {" "}
            <br /> Rider
          </span>{" "}
          today
        </Heading>
        <Link href="/signup" _hover={{textDecoration:"none"}}>
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
            color="#D85B00"
            _hover={{textDecoration:"none"}}
          >
            SignUp
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Rider;
