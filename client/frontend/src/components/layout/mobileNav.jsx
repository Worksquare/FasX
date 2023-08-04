import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancelPresentation } from "react-icons/md";
import { Button } from "@chakra-ui/react";

const mobileNav = () => {
  const [dropDown, setDropDown] = useState(false);
  const logo = "../images/logo.png";
  const router = useRouter();

  const mobileData = [
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
    {
      title: "Login",
      href: "/Login",
    },
    {
      title: "Signup",
      href: "/signup",
    },
  ];

  

  return (
    <Box
    display={{ sm: "block", md: "block", lg: "none", xl: "none" }}
      alignItems="center"
      justifyContent="space-between"
      p="35px 120px"
    >
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>

      <Button onClick={handleDropdown}>
        {dropDown ? (
          <MdCancelPresentation size={50} color="#515C9E" />
        ) : (
          <AiOutlineMenu size={40} color="#515C9E" />
        )}
      </Button>

      <Box>
        {mobileData.map((data, index) => {
          return (
            <Link
              key={index}
              href={data.href}
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
    </Box>
  );
};

export default mobileNav;
