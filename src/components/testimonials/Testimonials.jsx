import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import {  Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar:AVTR1,
    name:'Tina Snow',
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laudantium eius recusandae ad. Tempora iusto similique sed quasi saepe ipsa rem ab eum architecto error deleniti fugiat odio, excepturi vitae?'
  },
  {
    avatar:AVTR2,
    name:'Shatta Wale',
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laudantium eius recusandae ad. Tempora iusto similique sed quasi saepe ipsa rem ab eum architecto error deleniti fugiat odio, excepturi vitae?'
  },
  {
    avatar:AVTR3,
    name:'Kwame Despite',
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laudantium eius recusandae ad. Tempora iusto similique sed quasi saepe ipsa rem ab eum architecto error deleniti fugiat odio, excepturi vitae?'
  },
  {
    avatar:AVTR4,
    name:'Taylor Swift',
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laudantium eius recusandae ad. Tempora iusto similique sed quasi saepe ipsa rem ab eum architecto error deleniti fugiat odio, excepturi vitae?'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testinomials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable:true }}
      > 
        {
          data.map(({avatar,name,review},index) => {
            return(
              <SwiperSlide key={index} className="testinomial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
                <p className="client__review">
                    {review}
                </p>
            </SwiperSlide>
            )
          })
        }

        
      </Swiper>
    </section>
  )
}

export default Testimonials