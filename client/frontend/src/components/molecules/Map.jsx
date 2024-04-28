import React from "react";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

const Map = () => {
  const map = "../images/map.png";

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
      my="60px"
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
        h="507px"
      >
        <Heading
          fontSize={{
            sm: "40px",
            xl: "60px",
          }}
          textAlign={{
            sm: "center",
            xl: "right",
          }}
          color="#101010"
        >
          Any <span style={{ color: "#FF0000" }}>Where</span> <br /> Any{" "}
          <span style={{ color: "#FF0000" }}>Time</span>
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
          color="#FF0000"
        >
          Currently Only in Lagos
        </Text>
      </Flex>

      <Image
        src={map}
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
    </Flex>
  );
};

export default Map;
