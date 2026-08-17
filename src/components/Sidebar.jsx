import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

function Sidebar() {
  return (
    <div id='sidebar'>
      <Navbar/>
      <div id="menu-sidebar">
        <Link to = "/" >Home</Link>
        <Link to = "/about" href="">About</Link>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Sidebar;
