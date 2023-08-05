import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/layout/navbar";
import Description from "../components/molecules/Description";
import Footer from "../components/molecules/Footer";
// import about from "../images/about"
const About = () => {
  const riderAbout = "../images/riderabout.png";
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
  return (
    <>
      <Navbar />
      <Description />

      <Flex justifyContent="center" alignItems="center">
        <Image
          src={about}
          alt="about-image"
          position="relative"
          w="100vw"
          h="632px"
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
            w="450px"
            fontWeight="900"
            fontSize="64px"
            lineHeight="77px"
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
            w="1033px"
            fontWeight="500"
            fontSize="30px"
            lineHeight="36px"
            mx="auto"
            textAlign="center"
          >
            FastX is a fast growing and leading technology startup in Africa's
            largest economy, Nigeria, and has the potential to become one of the
            most impactful companies in all of Africa
          </Text>
        </Flex>
      </Flex>

      <Flex bg="#FF8E3D" alignItems="center" justifyContent="center">
        <Box color="#FFF" mb="13px">
          <Text
            textAlign="center"
            color="#FFF"
            fontWeight="700"
            fontSize="50px"
            textDecoration="underline"
            mb="10px"
          >
            Our Riders
          </Text>
          <Text w="800px" fontWeight="500" fontSize="30px" ml="50px">
            FastX Riders is a team of dedicated and professional delivery
            partners who work with FastX to provide fast and reliable delivery
            services to customers across Nigeria. FastX Riders are equipped with
            the latest technology and tools to ensure that they can deliver any
            item, from electronics and gadgets to books and groceries, safely
            and efficiently. FastX Riders are also trained and certified to
            handle different modes of transportation, such as bike, car, truck,
            or even drone, depending on the size and weight of the item and the
            customer's preference.
          </Text>
        </Box>
        <Image
          src={riderAbout}
          alt="Riders"
          w="650px"
          h="700px"
          zIndex="3"
          mt="-150px"
        />
      </Flex>
      <Box mt="67px" justifyContent="center" alignItems="center" mx="120px">
        <Text
          color="#FF0000"
          fontWeight="700"
          textAlign="left"
          fontSize="64px"
          textDecoration="underline"
        >
          Our Goals
        </Text>
        <Flex mx="50px" justifyContent="center" alignItems="center">
          <Text fontWeight="400" fontSize="29px" w="737px" mr="42px">
            The goal of FastX is to revolutionize the online delivery industry
            in Nigeria by offering a smart and convenient platform that connects
            customers with the best delivery partners for their needs. FastX
            aims to provide customers with a variety of choices, flexibility,
            transparency, and control over their deliveries. FastX also aims to
            provide delivery partners with a rewarding and fulfilling career
            opportunity that allows them to grow and earn more. FastX is
            committed to delivering speed, quality, and satisfaction to both
            customers and delivery partners.
          </Text>
          <Box  w="677px" h="401px">
            <Text
              color="#009D52"
              fontWeight="700"
              textAlign="right"
              fontSize="64px"
              textDecoration="underline"
            
            >
              Our Mission
            </Text>
            <Text
              px="68px"
              fontSize="28px"
              fontWeight="400"
              lineHeight="33px"
              pt="10px"
              textAlign="center"
              alignContent="center"
            >
              fastx’s mission is to provide convenient, reliable delivery
              services to users, while empowering delivery partners with
              flexible and rewarding opportunities.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box bg="#FF6B00" py="50px" mt="67px">
        <Text
          color="#FFF"
          fontWeight="700"
          textAlign="center"
          fontSize="64px"
          textDecoration="underline"
        >
          Testimonies
        </Text>
        <Grid
          gridTemplateColumns="repeat(3, 1fr)"
          mt="100px"
          gridGap="20px"
          px="50px"
        >
          {testimonies.map((testimony, index) => (
            <GridItem
              key={index}
              w="456px"
              h="503px"
              bg="#FFF"
              borderRadius="8px"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              p="50px 11px"
              textAlign="center"
            >
              <Text fontSize="24px" fontWeight="400" mb="20px">
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
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default About;
