import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  const riderAbout = "../images/riderabout.png";
  const testimonies = [
    { heading: "Lorem ipsum dolor sit amet consec", text: "-Lorem Ipsum" },
    { heading: "Purus vitae bibendum gravida purus sem", text: "-Lorem Ipsum" },
    {
      heading: "dolor sit amet consectetur. Purus vitae bibendum gravida ",
      text: "-Lorem Ipsum",
    },
    { heading: "sit amet consectetur. ", text: "-Lorem Ipsum" },
  ];
  return (
    <>
      <Box mt="178px" justifyContent="center" alignItems="center">
        <Text
          w="186px"
          h="77px"
          fontWeight="900"
          fontSize="64px"
          lineHeight="77px"
          mx="auto"
        >
          {" "}
          Fast
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
          h="216px"
          alignContent="center"
          justifyContent="center"
          fontWeight="500"
          fontSize="45px"
          lineHeight="53px"
          mx="auto"
          mb="187px"
        >
          A fast growing and leading technology startup in Africa's largest
          economy, Nigeria, and has the potential to become one of the most
          impactful companies in all of Africa.
        </Text>
      </Box>
      <Flex px="70px" bg="#FF6B00" alignItems="center" justifyContent="center">
        <Box color="#FFF">
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
          <Text w="600px" fontWeight="500" fontSize="30px">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            excepturi praesentium incidunt ad ratione? Molestiae neque nulla
            culpa porro exercitationem, officiis itaque ipsum id. Sequi nemo
            illum esse facilis ducimus?
          </Text>
        </Box>
        <Image src={riderAbout} alt="Riders" w="650px" h="650px" mt="-150px" />
      </Flex>
      <Box mt="67px">
        <Text
          color="#FF0000"
          fontWeight="700"
          textAlign="center"
          fontSize="64px"
          textDecoration="underline"
        >
          Our Goals
        </Text>
        <Text fontWeight="400" fontSize="40px" mx="200px">
          Lorem ipsum dolor sit amet consectetur. Purus vitae bibendum gravida
          purus sem consectetur. Lacus id nec felis eu est viverra eget sit.
          Vitae at nisl consequat potenti est pharetra sed purus ut. Iaculis
          magnaLorem ipsum dolor sit amet consectetur. Purus vitae bibendum
          gravida purus sem consectetur. Lacus id nec felis eu est viverra eget
          sit. Vitae at nisl consequat potenti est pharetra sed purus ut.
          Iaculis magna
        </Text>
      </Box>
      <Box bg="#FF6B00" py="50px" mt="67px">
        <Text color="#FFF"
          fontWeight="700"
          textAlign="center"
          fontSize="64px"
          textDecoration="underline">Testimonies</Text>
        <Grid
          gridTemplateColumns="repeat(4, 1fr)"
          mt="100px"
          gridGap="28px"
          px="70px"
        >
          {testimonies.map((testimony, index) => (
            <GridItem
              key={index}
              bg="#FFF"
              borderRadius="8px"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              p="50px 11px"
              textAlign="center"
            >
              <Text fontSize="36px" fontWeight="400" mb="20px">
                {testimony.heading}
              </Text>
              <Text textAlign="right" fontSize="36px" fontWeight="500" color="#AE4900">
                {testimony.text}
              </Text>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default About;
