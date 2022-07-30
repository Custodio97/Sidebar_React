import React from 'react'
import * as C from './style'
import { FaTimes, FaHome, FaBlogger } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { AiFillShop } from 'react-icons/ai'
import { FcBusinessContact } from 'react-icons/fc'
import SidebarItems from '../SidebarItems'
const Sidebar = ({ active }) => {
    const closeSidebar = () => {
        active(false)
    }
  return (
      <C.Sidebar sidebar={active}>
          <FaTimes className='close' onClick={closeSidebar} />
          <C.Content>
           <SidebarItems Icon={FaHome} Title="Home"  />
           <SidebarItems Icon={FcAbout} Title="About" />
           <SidebarItems Icon={AiFillShop} Title="Shop" />
           <SidebarItems Icon={FaBlogger} Title="Blog" />
           <SidebarItems Icon={FcBusinessContact} Title="Contact"/>
          </C.Content>
    </C.Sidebar>
  )
}

export default Sidebar