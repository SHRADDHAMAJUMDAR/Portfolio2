import { Link } from "react-router-dom"
import "./AboutContenStyles.css"
import React from 'react'
import study from "../assets/study.jpg"
import study2 from "../assets/study2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Hi! I am Shraddha! I am currently pursuing Electronics and Communication Engineering in NIT Agartala.
              I have a keen interest in web development and want to work further and delve deeper into this field.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            
            </Link>
            </div>
            <div className="right">
            <div className="img-container">
                <div className="img-stack-top">
                
                    <img src={study} className="img"
                    alt="true"/>
                         </div>

<div className="img-stack-bottom">
                   
                    <img src={study2} className="img"
                    alt="true"/>
                      </div>
            </div>
        </div>
    </div>
  );
};

export default AboutContent