import React from 'react'
import './about.css'
import me from '../../assets/tempPfp.jpg'
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
              <FaUsers className='aboutCardIcon'/>
              <h5>Clients</h5>
              <small>0+</small>
            </article>
            <article className='aboutCard'>
              <FaFolderOpen className='aboutCardIcon'/>
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reprehenderit in eveniet molestias, praesentium, delectus ducimus possimus pariatur, incidunt asperiores quod explicabo nihil. Quos quasi laborum dolores ab dolorem tenetur.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default about