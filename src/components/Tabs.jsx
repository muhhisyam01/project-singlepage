import React from 'react'
import {Container, Nav, NavItem, NavLink} from 'reactstrap'
export default function Tabs({tab, setTab}) {
  return (
   
<Nav className="container py-5 color-white" pills>
    <NavItem>
      <NavLink
        active={tab === 0? true:false}
        onClick={() => setTab(0)}
      >
        Semua
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink active={tab === 1? true:false} onClick={() => setTab(1)}>
        Laki-laki
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink active={tab === 2? true:false} onClick={() => setTab(2)}>
        Perempuan
      </NavLink>
    </NavItem>
  
  </Nav>
   
    
  )
}
