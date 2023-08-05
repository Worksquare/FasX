import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancelPresentation } from "react-icons/md";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
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

  const handleMenuDisplay = () => {
    setShowMenu(!showMenu);
  };

  const router = useLocation();

  return (
    <Box
      display={{
        sm: "block",
        xl: "flex",
      }}
      alignItems="center"
      justifyContent="space-between"
      p={{
        sm: "7px 18px",
        xl: "35px 120px",
      }}
      bg={{
        sm: "#FFC79E",
        xl: "#FFF",
      }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            w={{
              sm: "112px",
              xl: "100%",
            }}
            h={{
              sm: "47px",
              xl: "100%",
            }}
          />
        </Link>
        <Box
          display={{
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          }}
          onClick={handleMenuDisplay}
        >
          {showMenu ? (
            <MdCancelPresentation size={40} />
          ) : (
            <AiOutlineMenu size={40} />
          )}
        </Box>
        {showMenu && (
          <Flex
            flexDirection="column"
            alignItems="center"
            position="absolute"
            justifyContent="center"
            zIndex="4"
            bg="white"
            w="100vw"
            h="100vh"
            left="0"
            top="60px"
            overflow="hidden"
            display={{
              sm: showMenu && "flex",
              xl: "none",
            }}
          >
            {navlinks.map((navlink, index) => {
              return (
                <Link
                  key={index}
                  href={navlink.href}
                  color={
                    router.pathname === navlink.href ? "#FF0000" : "#BABABAAB"
                  }
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
          </Flex>
        )}
      </Flex>

      <Box display={{ sm: "none", md: "none", lg: "block", xl: "block" }}>
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

      <Flex
        gap="30px"
        display={{ sm: "none", md: "none", lg: "flex", xl: "flex" }}
      >
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
    </Box>
  );
};

export default Navbar;
