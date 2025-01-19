import React from 'react'
import "./Project.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import myproject_data from "../../assets/mywork_data"

const Project = () => {
  return (
    <div id='projects' className='project'>
         <div className="myproject">
            <h1>My Latest Projects</h1>
            <img src={theme_pattern} alt="" />
         </div>
         <div className="myproject_container">
            {myproject_data.map((work,index)=>{
                return <img key = {index} src = {work.w_img}/>
            })}
         </div>
    </div>
  )
}

export default Project