import React from "react";
import "./homeLayout.css";

import Navbar from "./navbar";
import Footer from "./footer";
import Home from "../views/home";

const Layout = ({ children }) => {
  return (
    <div className="home-container">
      <Navbar> </Navbar>
      <div style={{ minHeight: "80vh" }}>
        {/* {children} */}
        
        </div>
        <div>
            <h1>Welcome to Land locked Country</h1>
            <div className="quote-div">
            <h2> Book Tour With Us.</h2>
            <p>Lorem Ipsum Excepteur consequat officia enim est id mollit aliqua.</p>
            <p>Lorem Ipsum excepteur consequat officia Laboris tempor excepteur deserunt sint tempor cupidatat culpa aliquip esse magna excepteur. Adipisicing ex eiusmod non non. Do ex est quis magna consequat incididunt sint nisi ut qui sint dolor elit duis. Sunt esse eiusmod anim eu ea in enim id irure commodo deserunt. Non minim cillum officia sunt duis esse commodo laboris sit Lorem cupidatat laboris.</p>
          <div className="image">
            
          </div>
          </div>
        </div>
        
      <Footer />
    </div>
  );
};

export default Layout;