import {
  Box,
  Button,
  Flex,
  Heading,
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
  return (
    <>
      <Flex justifyContent="space-between" bg="#454545" p="30px 120px">
        <Box color="white" fontFamily="Colfax" fontSize="20px">
          <Heading color="#F06500">Newsletter</Heading>
          <Text fontWeight="500">
            Get the latest news about our services and products
          </Text>

          <InputGroup border="#B7B7B7" w="500px" mb="24px" mt="10px">
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

          <Box fontWeight="700">
            <Text>Service Hours: Mondays-Saturdays 9am 8pm</Text>
            <Text>Email: hello@FastX.com</Text>
            <Text>Phone No: 0987654321</Text>
          </Box>
        </Box>

        <Flex gap="100px">
          {footerLinks.map((footerLink, index) => {
            return (
              <Box
                key={index}
                color="white"
                fontFamily="Colfax"
                fontSize="20px"
              >
                <Heading color="#F06500" mb="10px">
                  {footerLink.title}
                </Heading>
                {footerLink.links.map((link, index) => {
                  return (
                    <Link
                      key={index}
                      display="block"
                      mb="20px"
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
      </Flex>

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
