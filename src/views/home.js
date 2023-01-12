import React from "react";
import './home.css'
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import Layout from "../component/homeLayout";

const Home=()=>{
    return(
    <>
   <Layout>
     <Navbar/>
        <div className="home-bg">
          <h1> Rwanda Booking Tours</h1>
          <div className="quote-div">
            <h2> Book Tour With Us.</h2>
            <p>Lorem Ipsum Excepteur consequat officia enim est id mollit aliqua.</p>
            <p>Lorem Ipsum excepteur consequat officia Laboris tempor excepteur deserunt sint tempor cupidatat culpa aliquip esse magna excepteur. Adipisicing ex eiusmod non non. Do ex est quis magna consequat incididunt sint nisi ut qui sint dolor elit duis. Sunt esse eiusmod anim eu ea in enim id irure commodo deserunt. Non minim cillum officia sunt duis esse commodo laboris sit Lorem cupidatat laboris.</p>
          </div>

      </div>
      <Footer></Footer>
      
      </Layout>
      </>
    )

}
export default Home;