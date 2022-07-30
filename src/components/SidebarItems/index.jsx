import React from 'react'
import * as C from './style'
const SidebarItems = ({Icon,Title,href}) => {
  return (
    <C.Container>
          <Icon />
      <p></p>
      <a href={href}>
        {Title}
      </a>
    </C.Container>
  )
}

export default SidebarItems