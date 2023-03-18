import React from 'react'
import '../css/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'


function Navbar() {
    const Navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to={'/'} className='navbar-main-head'>ProgressionX</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <p className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" onClick={() => {
                            Navigate('/signin')
                        }}>
                            Signin
                        </p>
                        <p className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" onClick={()=>{
                            Navigate('/')
                        }}>
                            Home
                        </p>
                        <p className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" onClick={()=>{
                            Navigate('/signup')
                        }}>
                            Signup
                        </p>
                        <p className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" onClick={()=>{
                            Navigate('/registcomp')
                        }}>
                            Regist company
                        </p>
                        <p className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" onClick={()=>{
                            Navigate('/myprofile')
                        }}>
                            Myprofile
                        </p>
                        <p className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" onClick={()=>{
                            Navigate('/admin')
                        }}>
                            Admin
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
