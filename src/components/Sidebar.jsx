import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Sidebar() {
  return (
    <div id='sidebar'>
      <Navbar/>
      <div id="menu-sidebar">
        <NavLink to = "/" >Home</NavLink>
        <NavLink to = "/about" href="">About</NavLink>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Sidebar;
