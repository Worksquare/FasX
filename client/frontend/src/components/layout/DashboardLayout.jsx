
import React from 'react'
import Sidebar from '../molecules/Sidebar'
import Dashboard from './Dashboard'
import { Flex } from '@chakra-ui/react'

const DashboardLayout = () => {
  return (    
    <Flex>
      <Sidebar />   
      <Dashboard />
    </Flex>
  );
};

export default DashboardLayout;
