import { Box, Flex, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/layout/navbar";
import Description from "../components/molecules/Description";
import Footer from "../components/molecules/Footer";
// import about from "../images/about"
const About = () => {
  const riderAbout = "../images/riderImage.png";
  const testimonies = [
    {
      heading:
        "FastX is the best delivery service for graphic designers like me. It is fast, convenient, and easy to use. I can choose from different delivery partners, track my order, and communicate with the delivery partner.  FastX has helped me save time and money, and grow my business.",
      text: "-Alice",
    },
    {
      heading:
        "FastX is the most reliable and secure delivery service for online store owners like me. It helps me find the best delivery partner, verify the order details, and confirm the delivery completion. It also uses blockchain technology to make transactions secure and transparent. FastX has helped me increase customer satisfaction and loyalty, and reach new markets.",
      text: "-Bob",
    },
    {
      heading:
        "FastX is the most flexible and transparent delivery service for online shoppers like me. It allows me to shop for different products from different brands online, and choose the best delivery option through the app. It also lets me track my order, and rate and review the delivery partner. FastX has made my online shopping more enjoyable and convenient.",
      text: "-Kabiru",
    },
  ];

  const about = "/images/about_bg.png";
  const choose = "/images/choose.png";
  return (
    <>
      <Navbar />
      <Description />

      <Flex justifyContent="center" alignItems="center">
        <Image
          src={about}
          alt="about-image"
          position="relative"
          w={{ sm: "100%", xl: "100vw" }}
          h={{ sm: "651px", xl: "632px" }}
          objectFit="cover"
        />

        <Flex
          position="absolute"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          h="210px"
          m="auto"
          color="white"
        >
          <Text
            // w={{ sm: "310px", xl: "450px" }}
            fontWeight="900"
            fontSize={{ sm: "32px", xl: "64px" }}
            lineHeight={{ sm: "38px", xl: "77px" }}
            mx="auto"
            mb="14px"
            color="#fff"
          >
            We are Fast
            <Box
              as="span"
              bgGradient="linear(to-r, #FF6B00, #FF0000)"
              bgClip="text"
              display="inline-block"
              ml="1"
            >
              X
            </Box>
          </Text>
          <Text
            maxW="1033px"
            px={{ sm: "35px", xl: "0" }}
            fontWeight="500"
            fontSize={{ sm: "16px", xl: "30px" }}
            lineHeight={{ sm: "20px", xl: "36px" }}
            mx="auto"
            textAlign="center"
          >
            FastX is a fast growing and leading technology startup in Africa's
            largest economy, Nigeria, and has the potential to become one of the
            most impactful companies in all of Africa
          </Text>
        </Flex>
      </Flex>

      <Box
        display={{ sm: "block", xl: "flex" }}
        bg="#FF8E3D"
        alignItems="center"
        justifyContent="center"
      >
        <Box color="#FFF" mb="13px">
          <Text
            textAlign="center"
            color="#FFF"
            fontWeight="700"
            fontSize={{ sm: "24px", xl: "50px" }}
            textDecoration="underline"
            mb="10px"
          >
            Our Riders
          </Text>
          <Text
            maxW="800px"
            fontWeight="500"
            fontSize={{ sm: "16px", xl: "25px" }}
            mx={{ sm: "20px", xl: "50px" }}
          >
            FastX Riders is a team of dedicated and professional delivery
            partners who work with FastX to provide fast and reliable delivery
            services to customers across Nigeria. <br /> <br /> FastX Riders are
            equipped with the latest technology and tools to ensure that they
            can deliver any item, from electronics and gadgets to books and
            groceries, safely and efficiently. <br /> <br /> FastX Riders are
            also trained and certified to handle different modes of
            transportation, such as bike, car, truck, or even drone, depending
            on the size and weight of the item and the customer's preference.
          </Text>
        </Box>
        <Image
          src={riderAbout}
          alt="Riders"
          w={{ sm: "221px", xl: "524px" }}
          h={{ sm: "322px", xl: "760px" }}
          zIndex="3"
          mt={{ sm: "-30px", xl: "-140px" }}
          ml={{ sm: "153px", xl: "0" }}
        />
      </Box>
      <Box
        display={{ sm: "block", xl: "flex" }}
        mt="67px"
        gap="100px"
        justifyContent="space-between"
        alignItems="flex-start"
        px={{ sm: "25px", xl: "120px" }}
      >
        <Box>
          <Text
            color="#FF0000"
            fontWeight="700"
            textAlign={{ sm: "center", xl: "left" }}
            fontSize={{ sm: "24px", xl: "64px" }}
            textDecoration="underline"
          >
            Our Goals
          </Text>
          <Text
            fontWeight="400"
            fontSize={{ sm: "16px", xl: "22px" }}
            lineHeight="26px"
            textAlign="justify"
            maxW="737px"
          >
            The goal of FastX is to revolutionize the online delivery industry
            in Nigeria by offering a smart and convenient platform that connects
            customers with the best delivery partners for their needs.
            <br />
            <br />
            FastX aims to provide customers with a variety of choices,
            flexibility, transparency, and control over their deliveries. FastX
            also aims to provide delivery partners with a rewarding and
            fulfilling career opportunity that allows them to grow and earn
            more.
          </Text>
        </Box>

        <Flex
          flexDir="column"
          alignItems={{ sm: "", xl: "flex-end" }}
          maxW="612px"
        >
          <Text
            color="#009D52"
            fontWeight="700"
            textAlign={{ sm: "center", xl: "right" }}
            fontSize={{ sm: "24px", xl: "64px" }}
            textDecoration="underline"
          >
            Our Mission
          </Text>
          <Text
            fontWeight="400"
            fontSize={{ sm: "16px", xl: "22px" }}
            lineHeight="26px"
            textAlign="justify"
            maxW="737px"
          >
            fastx’s mission is to provide convenient, reliable delivery services
            to users, while empowering delivery partners with flexible and
            rewarding opportunities.
          </Text>
        </Flex>
      </Box>

      <Box bg="#FF6B00" py="50px" mt="67px">
        <Text
          color="#FFF"
          fontWeight="700"
          textAlign={{ sm: "left", xl: "center" }}
          fontSize={{ sm: "24px", xl: "64px" }}
          textDecoration="underline"
        >
          Testimonies
        </Text>
        <Box
          display={{ sm: "block", xl: "grid" }}
          gridTemplateColumns="repeat(3, 1fr)"
          mt="100px"
          gridGap="20px"
          px="50px"
        >
          {testimonies.map((testimony, index) => (
            <GridItem
              key={index}
              maxW="456px"
              h="503px"
              bg="#FFF"
              borderRadius="8px"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              p="50px 11px"
              textAlign="center"
            >
              <Text
                fontSize={{
                  sm: "12px",
                  xl: "24px",
                }}
                fontWeight="400"
                mb="20px"
              >
                {testimony.heading}
              </Text>
              <Text
                textAlign="right"
                fontSize="36px"
                fontWeight="500"
                color="#AE4900"
                h="54px"
                // pt="16px"
              >
                {testimony.text}
              </Text>
            </GridItem>
          ))}
        </Box>
      </Box>
      <Image src={choose} objectFit="cover" />
      <Footer />
    </>
  );
};

export default About;
