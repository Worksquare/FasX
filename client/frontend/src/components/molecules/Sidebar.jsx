import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Dashboard from '../layouts/Dashboard'
import OrderPickup from '../layouts/OrderPickup'
import Wallet from '../layouts/Wallet'
import Track from '../layouts/Track'
import Profile from '../layouts/Profile'
import CustomerCare from '../layouts/CustomerCare'
import { BiLogOutCircle } from 'react-icons/bi'
import { LuHome } from 'react-icons/lu'
import { CiWallet } from 'react-icons/ci'
import { GiSettingsKnobs } from 'react-icons/gi'
import { BiMessageDetail } from 'react-icons/bi'
import { BsBookmarkPlus } from 'react-icons/bs'

const Sidebar = () => {
  const sidebarLinks = [
    {
      icon: <LuHome />,
      title: 'Home',
      href: '#!',
      content: <Dashboard />,
    },
    {
      icon: <BsBookmarkPlus />,
      title: 'Order Pickup',
      href: '#!',
      content: <OrderPickup />,
    },
    {
      icon: <CiWallet />,
      title: 'Wallet',
      href: '#!',
      content: <Wallet />,
    },
    {
      icon: 'track_icon',
      title: 'Track',
      href: '#!',
      content: <Track />,
    },
    {
      icon: <GiSettingsKnobs />,
      title: 'Profile',
      href: '#!',
      content: <Profile />,
    },
    {
      icon: <BiMessageDetail />,
      title: 'Customer Care',
      href: '#!',
      content: <CustomerCare />,
    },
  ]

  const [currentPage, setCurrentPage] = useState(sidebarLinks[0].content)

  const handleSidebarContent = (link) => {
    setCurrentPage(link.content)
  }

  const logo = '/assets/logo.png'

  return (
    <Box bg="#F8F8F8">
      <Flex alignItems="center" justifyContent="space-between" p="35px 120px">
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>

        <Link
          href="#!"
          display="flex"
          alignItems="center"
          gap="8px"
          fontWeight="700"
          fontSize="26px"
          fontFamily="Colfax"
          color="#FF0000"
        >
          <BiLogOutCircle />
          <Text>Logout</Text>
        </Link>
      </Flex>

      <Flex>
        <Flex
          py="16px"
          flexDir="column"
          h="100vh"
          overflow="hiddden"
          display="inline-flex"
          bg="#F8F8F8"
        >
          {sidebarLinks.map((link, index) => {
            return (
              <Flex
                href={link.href}
                alignItems="center"
                p="16px"
                gap="8px"
                key={index}
                cursor="pointer"
                onClick={() => handleSidebarContent(link)}
              >
                {link.icon}
                <Text>{link.title}</Text>
              </Flex>
            )
          })}
        </Flex>

        <Box>{currentPage}</Box>
      </Flex>
    </Box>
  )
}

export default Sidebar

