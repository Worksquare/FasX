import React from "react";
import Navbar from "../components/layout/navbar";
import { Box } from "@chakra-ui/react";
import Description from "../components/molecules/Description";
import HeroSection from "../components/molecules/HeroSection";
import Showcase from "../components/molecules/ShowCase";
import Rider from "../components/molecules/Rider";
import Map from "../components/molecules/Map";
import Footer from "../components/molecules/Footer";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Description />

      <HeroSection />
      <Showcase />
      <Rider />
      <Map />
      <Footer />
    </Box>
  );
};

export default Home;
