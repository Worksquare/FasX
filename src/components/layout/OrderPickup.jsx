import React from "react";
import { Flex } from "@chakra-ui/react";
import Sidebar from "../molecules/Sidebar";
import RiderList from "../riders list/RiderList";

const OrderPickup = () => {
  return (
    <Flex
      bg="#F8F8F8"
      alignItems="center"
      justifyContent="space-between"
      p="35px 120px"
    >
      <Sidebar />
      <RiderList />
    </Flex>
  );
};

export default OrderPickup;
