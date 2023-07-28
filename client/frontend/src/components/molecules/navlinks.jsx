import React from "react";
import {NavLink} from "react-router-dom"
import { Box, Link  } from "@chakra-ui/react"; 
import Blog from "../../pages/blog";
import ContactUs from "../../pages/contactUs";
import Home from "../../pages/home";
import About from "../../pages/about";
// import Blog from "../"


const Navlinks = () => {
  const navItems = [
    {
      name: "Home",
      path: <Home/>,
    },
    {
      name: "About",
      path: <About/>,
    },
    {
      name: "Contact Us",
      path: <ContactUs/>,
    },
    {
      name: "Blog",
      path: <Blog/>,
    },
  ];

  return (
    <>
    <Box bg="#FFFFFF">
      {navItems.map((item, index) => (
        <Link key={index} as={NavLink} to={item.path}  style={{ marginRight: "10px" }}>
          {item.name}
        </Link>
      ))}
      </Box>
    </>
  );
};

export default Navlinks;
