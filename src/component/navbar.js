import React from "react";
import logo from '../assets/img/logo.png'
import './navbar.css'
 
const Navbar=()=>{

    return(
        <>
       <div className="nav-container">
        <img src={logo} />
     <div className="navbar">
     
     <div className="navbar-fix">
            <a href="/aboutus"> About Us</a>
            <a href="/tours"> Tours</a>
            <a href="#"> Garelly</a>
            {/* <a href="#" onClick={() => setIsVisible(true)}>
              {" "}
              Signin
            </a> */}
            {/* <a href="#" onClick={() => setIsSignupVisible(true)}>
              {" "}
              Signup
            </a> */}
            <a href="/"> Home</a>
          </div>

     </div>
     </div>
     </>
    )
}

export default Navbar;