import React, { useRef } from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaFacebookMessenger} from 'react-icons/fa'
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_af7j4cm', 'template_hhpxi2q', form.current, 'MH2cN-sdVUwFrQwNp')
    
    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contactContainer">
        <div className="contactOptions">
          <article className="contactOption">
            <AiOutlineMail className='contactOptionIcon'/>
            <h4>Email</h4>
            <h5>andrew@creaturecodes.com</h5>
            <a href="mailto:andrew@creaturecodes.com" target='_blank'>Send a message</a>
          </article>
          <article className="contactOption">
            <FaFacebookMessenger className='contactOptionIcon'/>
            <h4>Messanger</h4>
            <h5>Andrew Meyer</h5>
            <a href="https://m.me/CreatureLabs03" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        </div>

    </section>
  )
}

export default Contact