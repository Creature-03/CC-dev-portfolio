import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen, AiOutlineContacts, AiOutlineBook} from 'react-icons/ai'


const Nav = () => {
  return (
    <nav id='nav'>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><AiOutlineBook/></a>
      <a href="#portfolio"><AiOutlineFolderOpen/></a>
      <a href="#contact"><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav