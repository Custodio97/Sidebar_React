import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import Sidebar from '../Sidebar'
import * as C from './style'
import logo from '../../assets/logo.png'
const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar=()=> setSidebar(!sidebar)
  return (
      <C.Header>
          <img src={logo} alt="logo" />
          <FaBars onClick={showSidebar} />
          {sidebar && <Sidebar active={setSidebar} />}
    </C.Header>
  )
}

export default Navbar