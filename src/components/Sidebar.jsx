import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div id='sidebar'>
      <Link to = "/" >Home</Link>
      <Link to = "/about" href="">About</Link>
    </div>
  )
}

export default Sidebar;
