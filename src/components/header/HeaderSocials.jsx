import React from 'react'
import {BsLinkedin, BsFacebook, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='headerSocials'>
        <a href="https://www.linkedin.com/in/andrew-meyer-03/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/Creature-03" target='_blank'><BsGithub /></a>
        <a href="https://www.facebook.com/CreatureLabs03" target='_blank'><BsFacebook /></a>
    </div>
  )
}

export default HeaderSocials