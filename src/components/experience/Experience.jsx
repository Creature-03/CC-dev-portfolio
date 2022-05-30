import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experienceContainer">
        {/* Front End */}
        <div className="experienceFrontend">
          <h3>Frontend Development</h3>
          <div className="experienceContent">
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* Back End */}
        <div className="experienceBackend">
        <h3>Backend Development</h3>
          <div className="experienceContent">
          <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          <article className='experienceDetails'>
              <BsPatchCheckFill className='experienceDetailsIcon'/>
              <div>
                <h4>Ruby</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default experience