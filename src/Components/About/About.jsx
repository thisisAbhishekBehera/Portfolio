import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/img.jpg"

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
         <div className="about-sections">
            <div className="about-left">
               <img src={profile_img}  alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                <p> Currently i’m pursuing  Bachelor’s Of Technology in Electronics and Telecommunications Engineering at Igit sarang.
 While my core studies focus on electronics and communication systems, I've actively pursued my passion for frontend development, gaining practical experience in building user interfaces and web applications. 
 A quick learner with excellent communication skills, I excel in adapting to new challenges and working collaboratively to deliver solutions.
 </p>
                </div>
                <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p> <hr style={{width: "50%"}} /></div>
            <div className="about-skill"><p>React JS</p> <hr style={{width: "70%"}} /></div>
            <div className="about-skill"><p>JavaScript</p> <hr style={{width: "60%"}} /></div>
            <div className="about-skill"><p>DSA in Java</p> <hr style={{width: "50%"}} /></div>
         </div>
            
     </div>
        
  </div>
         
         
         <div id='certifications' className="Certifications">
            <h3>Certifications:</h3>
            <div className="Certification-Name">
                <h3>Full Stack Web Development</h3>
                <p>PW Skills</p>
            </div>
            <div className="Certification-Name">
                <h3>Data Structures & Algorithms in Java</h3>
                <p>Apna College</p>
            </div>
            <div className="Certification-Name">
                <h3>Basics Of Java</h3>
                <p>HackerRank</p>
            </div>
         </div>
    </div>
  )
}

export default About