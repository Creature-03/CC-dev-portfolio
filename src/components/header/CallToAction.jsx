import React from 'react'
import Resume from '../../assets/Andrew_Meyer_Resume.pdf'

const CallToAction = () => {
  return (
    <div className='CallToAction'>
        <a href={Resume} className='btn' target='_blank' download='AndrewMeyerResume.pdf'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CallToAction