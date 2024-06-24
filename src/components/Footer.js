import "./FooterStyles.css";

import React from 'react';
import {FaHome,FaPhone,FaMailBulk, FaTwitter,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left" >
                <div className="location" >
                <FaHome  size={20} style={{color:
                "#fff", marginRight:"2rem"}}/>
                <div>
                    <p> Agartala,Tripura </p>
                    <p>India</p>

                </div>
                </div>

                <div className="phone">
                
                    <h4><FaPhone  size={20} style={{color:
                "#fff", marginRight:"2rem" }}/>
                +91-9862437452</h4>
                
                </div>

                <div className="email" >
                <a href="mailto:shraddhamajumdar03@gmail.com" target="_blank" rel="noopener noreferrer">
                    <h4>
                    <FaMailBulk  size={20} style={{color:
                "#fff", marginRight:"2rem"}}/>
                shraddhamajumdar03@gmail.com</h4>
                </a>
                
                    
                    </div>
               
                    

                </div>

               
        <div className="right">
            <h4> About me</h4>
            <p> Hello! I am Shraddha Majumdar. I am pursuing B.Tech
                Electronics and Communication Engineering (ECE'25) in NIT Agartala.
                I have a keen interest in web development and other software related
                subjects.  I am highly motivated and a quick learner and this is my portfolio.
            </p>

            <div className="social">
    <a href="https://twitter.com/ShraddhaM1523" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}} />
    </a>
    <a href="http://www.linkedin.com/in/shraddha-majumdar-165019236" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}} />
    </a>
</div>

        
        </div>
       </div>
       </div>
      
    
  )
  }



export default Footer