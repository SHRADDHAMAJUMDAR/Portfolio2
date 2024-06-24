import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../assets/intropic.jpeg";
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
         <div className="mask">
            <img className="intropic" src={IntroImg} alt="IntroImg"/>



         </div>
         <div className="content">
            <p>HI, I am Shraddha Majumdar</p>
            <h1>Student</h1>
            <div>
            <Link to="/projects" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
           <div className="btn btn-resume">
           <a href="https://drive.google.com/file/d/1EBoqc-X2eKZ7PP8GDA7o97Rozs66X7kd/view" >Download Resume</a>
            </div> 

         </div>
         </div>



    </div>
  )
}

export default HeroImg