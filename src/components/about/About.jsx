import React from 'react'
import './about.css'
import me from '../../assets/IMG_2367.PNG'
import {FaAward, FaUsers, FaFolderOpen} from 'react-icons/fa'


const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMeImg">
            <img src={me} alt="about image" />
          </div>
        </div>
        <div className="aboutContent">
          <div className="aboutCards">
            <article className='aboutCard'>
              <FaAward className='aboutCardIcon'/>
              <h5>Experience</h5>
              <small>2+ years</small>
            </article>
            <article className='aboutCard'>
              <FaFolderOpen className='aboutCardIcon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>
            Hey, I'm Andrew. I'm a numbers guy, spreadsheets and code are my bread and butter. I started learning to code with C++ in 2020 and have since in addition to C++ learned C#, Python, JavaScript, and Unreal Blueprint.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default about