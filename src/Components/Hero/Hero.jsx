import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/img.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const PDF_URL= "https://drive.google.com/file/d/1PgUdouJ0P37IljbeQEtSzcLXqbCT-vmF/view?usp=sharing"
  return (
    
    <div id='home'  className='hero'>
           <img src={profile_img} alt="" />
        <h1><span>I'm Abhishek Behera</span>   frontend developer from India </h1>
        <p> I am an
      enthusiastic software developer with strong problem-solving
       and analytical abilities.</p>
      <div className="hero-action">
         <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
      <div className="hero-resume">
         My Resume
      </div>
          </div>
    </div>
  )
}

export default Hero