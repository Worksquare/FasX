import React from "react";
import { Box } from "@chakra-ui/react";
import RiderList from "../riders list/RiderList";

const OrderPickup = () => {
  return (
    <Box
      bg="#F8F8F8"
      alignItems="center"       
      justifyContent="space-between"
      p="35px 120px"
    >
      <RiderList />
    </Box>
  );    
};

export default OrderPickup;
