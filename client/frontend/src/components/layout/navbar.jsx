import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";

import React from "react";
import {  useLocation } from "react-router-dom";

const Navbar = () => {
  const navlinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  const logo = "../images/logo.png";
  const router = useLocation();
  return (
    <Flex alignItems="center" justifyContent="space-between" p="35px 120px">
      <Link href="/">
      <Image src={logo} alt="logo" />
      </Link>

      <Box>
        {navlinks.map((navlink, index) => {
          return (
            <Link
              key={index}
              href={navlink.href}
              color={router.pathname === navlink.href ? "#FF0000" : "#BABABAAB"}
              textDecoration={
                router.pathname === navlink.href ? "underline" : "none"
              }
              mx="42px"
              fontFamily="Inter"
              fontWeight="800"
              fontSize="24px"
            >
              {navlink.title}
            </Link>
          );
        })}
      </Box>

      <Flex gap="30px">
        <Link href="/Login">
          <Button
            color="white"
            bgGradient="linear(to-r, #FF6B00, #FF0000)"
            padding="11px"
            fontFamily="Colfax"
            fontWeight="500"
            fontSize="27px"
          >
            Log in
          </Button>
        </Link>
        <Link href="/signup">
        <Button
          border="2px solid #FF8E3D"
          padding="11px"
          bg="none"
          color="#FF8E3D"
          fontFamily="Colfax"
          fontWeight="500"
          fontSize="27px"
        >
          SignUp
        </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
