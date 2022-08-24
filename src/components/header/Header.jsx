import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import ProfilePicture from '../../assets/IMG_2387.PNG'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header id='header'>
      <div className=" headerContainer container">
        <h5>Hello I'm</h5>
        <h1>Andrew Meyer</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <CallToAction />
        <HeaderSocials />

        <div className="me">
          <img src={ProfilePicture} alt="profile picture" />
        </div>


      </div>
    </header>
  )
}

export default header