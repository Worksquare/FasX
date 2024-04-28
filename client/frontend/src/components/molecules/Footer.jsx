import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {     
      title: "About Us",
      links: [
        {
          name: "About Us",
          href: "/about",
        },
        {
          name: "Where to Find us",
          href: "#!",
        },     
        {    
          name: "FAQs",
          href: "#!",
        },
      ],
    },
    {
      title: "Terms",
      links: [
        {
          name: "Warranty",
          href: "#!",
        },
        {
          name: "Refund",
          href: "#!",
        },
        {
          name: "Policies",
          href: "#!",
        },
        {
          name: "Privacy",
          href: "#!",
        },
      ],
    },
    {
      title: "Contact Us",
      links: [
        {
          name: "Track Order",
          href: "#!",
        },
        {
          name: "Report a Rider",
          href: "#!",
        },
        {
          name: "Talk to a representative",
          href: "#!",
        },
      ],
    },
  ];

  const logo = "../images/logo.png";
  return (
    <>
      <Box
        display={{ sm: "block", xl: "flex" }}
        justifyContent="space-between"
        bg="#454545"
        p={{ sm: "18px", xl: "30px 120px" }}
      >
        <Box color="white" fontFamily="Colfax" fontSize="20px">
          <Heading
            fontSize={{
              sm: "20px",
              xl: "27px",
            }}
            color="#F06500"
          >
            Newsletter
          </Heading>
          <Text
            fontSize={{
              sm: "14px",
            }}
            fontWeight="500"
          >
            Get the latest news about our services and products
          </Text>

          <InputGroup border="#B7B7B7" maxW="500px" mb="24px" mt="10px">
            <Input
              type="search"
              placeholder="Enter password"
              borderRadius="34px"
            />

            
            <InputRightElement w="112px">
              <Button type="submit" borderRadius="28px" p="11px">
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>

          <Box
            fontSize={{
              sm: "14px",
            }}
            fontWeight="700"
          >
            <Text>Service Hours: Mondays-Saturdays 9am 8pm</Text>
            <Text>Email: hello@FastX.com</Text>
            <Text>Phone No: 0987654321</Text>
          </Box>
        </Box>

        <Flex
          display={{ sm: "block", xl: "flex" }}
          mt={{ sm: "60px", xl: "0px" }}
          gap={{
            sm: "16px",
            xl: "100px",
          }}
        >
          <Link
            display={{
              sm: "block",
              xl: "none",
            }}
            mb="8px"
            href="/"
          >
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
          {footerLinks.map((footerLink, index) => {
            return (
              <Box
                key={index}
                color="white"
                fontFamily="Colfax"
                fontSize="20px"
                mb={{
                  sm: "16px",
                  xl: "0",
                }}
              >
                <Heading
                  fontSize={{
                    sm: "20px",
                    xl: "27px",
                  }}
                  color="#F06500"
                  mb="10px"
                >
                  {footerLink.title}
                </Heading>
                {footerLink.links.map((link, index) => {
                  return (
                    <Link
                      key={index}
                      display="block"
                      mb={{
                        sm: "8px",
                        xl: "20px",
                      }}
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </Box>
            );
          })}
        </Flex>
      </Box>

      <Flex
        flexDirection="column"
        py="20px"
        color="#929292"
        alignItems="center"
        justifyContent="center"
        bg="#101010"
      >
        <Heading>FastX</Heading>
        <Text>Copyright 2023</Text>
      </Flex>
    </>
  );
};

export default Footer;
