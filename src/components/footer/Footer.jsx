import React from 'react'
import './footer.css'
import {BsLinkedin, BsFacebook, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footerLogo'>Andrew</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footerSocials">
        <a href="https://www.linkedin.com/in/andrew-meyer-03/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/Creature-03" target='_blank'><BsGithub /></a>
        <a href="https://www.facebook.com/CreatureLabs03" target='_blank'><BsFacebook /></a>
      </div>

    </footer>
  )
}

export default Footer