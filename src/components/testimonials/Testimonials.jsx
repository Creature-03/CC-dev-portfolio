import React from 'react'
import './testimonials.css'
import avatar from '../../assets/testimonialAvatar.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    image: avatar,
    name: 'Some guy from work(probably)',
    review: 'He\'s a real stand up guy!'
  },
  {
    image: avatar,
    name: 'My mom',
    review: 'He\'s such a fine man!'
  },
  {
    image: avatar,
    name: 'My girlfriend',
    review: 'He\'s pretty good at React, I think.'
  },
  {
    image: avatar,
    name: 'My neighbor',
    review: 'Thanks for the daipers man.'
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Personal Reviews</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonialContainer"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({image, name, review}, index) => {
            return (
              <SwiperSlide className="testimonial" key={index}>
              <div className="testimonialAvatar">
                <img src={image} alt="reviewer avatar image" />
              </div>
              <h5 className='testimonialName'>{name}</h5>
              <small className='testimonialReview'>{review}</small>
            </SwiperSlide> 
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials