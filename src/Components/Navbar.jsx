import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
    <div className="navbar">
        <p className="main-heading">ProgressionX</p>
        <div className="nav-right">
           <Link to={'/signin'}>
            <p>Signin</p>
           </Link>
           <Link to={'/'}>
            <p>Home</p>
           </Link>
           <Link to={'/signup'}>
            <p>Signup</p>
           </Link>
           <Link to={'/registcomp'}>
            <p>Regist company</p>
           </Link>
           <Link to={'/myprofile'}>
            <p>Myprofile</p>
           </Link>
           <Link to={'/admin'}>
            <p>Admin</p>
           </Link>
           
        </div>
    </div>

  )
}

export default Navbar