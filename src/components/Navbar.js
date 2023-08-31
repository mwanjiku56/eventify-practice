import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import { ImCross } from 'react-icons/im'

function Navbar() {

const [State, setState] = useState(false)

    return(
        <>
        <nav>
        <Link to="/" style={{ color: "#3aeaca", textDecoration: "none" }}>
          <h1>Eventinfo</h1>
        </Link>
        <div>
            <ul className={State ? "nav-links-mobile" : "nav-links"} onClick={() => setState(false)}>
                <Link to='/' style={{ textDecoration: "none" }}><li>HOME</li></Link>
                <Link to='/categories' style={{ textDecoration: "none" }}><li>CATEGORIES</li></Link>
                <Link to='/Service' style={{ textDecoration: "none" }}><li>SERVICES</li></Link>
                <Link to='/signup' style={{ textDecoration: "none" }}><li>SIGNUP</li></Link>
                <Link to='/login'style={{ textDecoration: "none" }} ><li>LOGIN</li></Link>
            </ul>
            
            <button className="mobile-menu-icon" onClick={() => setState(!State)}>
                    {State ? <ImCross /> : <FaBars />}
    
                </button>
        </div>
        </nav>
        </>
    )
}

export default Navbar;