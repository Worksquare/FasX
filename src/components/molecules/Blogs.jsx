import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Blog = () => {
  const blog1 = "/images/blog1.png";
  const blog2 = "/images/blog2.png";
  const blog3 = "/images/blog3.png";
  const blog4 = "/images/blog4.png";

  const blogImgs = [blog1, blog2, blog3, blog4];
  return (
    <Box w="300px">
      <Heading textDecoration="underline" mb="12px">
        Our Blog News
      </Heading>
      <Box>
        {blogImgs.map((blog, index) => {
          return (
            <Image
              key={index}
              src={blog}
              cursor="pointer"
              alt="blog"
              mb="40px"
              _hover={{
                transform: "scale(1.1)",
                transition: "all ease-in 0.5s",
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Blog;
