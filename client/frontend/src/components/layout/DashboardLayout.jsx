import React from 'react'
import Sidebar from '../molecules/Sidebar'
import Dashboard from './Dashboard'

const DashboardLayout = () => {
  return (
    <Flex>
      <Sidebar/>
      <Dashboard/>
    </Flex>
  )
}

export default DashboardLayout
