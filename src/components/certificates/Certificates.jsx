import React from "react";
import "./certificates.css";
import AVTR1 from "../../assets/mcpa.jpg";
import AVTR2 from "../../assets/cisc.jpg";
import AVTR3 from "../../assets/cos.jpg";
import AVTR4 from "../../assets/is.jpg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "ITPEC",
    review:
      "I passed the Fundamental Engineering Examination held by ITPEC and MCPA,MCF in April 2023.",
  },
  {
    avatar: AVTR2,
    name: "CISCO Learning Academy",
    review:
      "I learned about Introduction to Cybersecurity and Introduction to Internet Of Things from CISCO learning Hub.",
  },
  {
    avatar: AVTR3,
    name: "Coursera",
    review:
      "I took Front-end Web UI Frameworks and Tools:BOOTSTRAP4 and React from Hong Kong University of Science and Technology through Coursera Platform.",
  },
  {
    avatar: AVTR4,
    name: "InsideSherpa",
    review:
      "I finished Engineering: Undergraduate and Masters Asia Virtual Experience Program from insideSherpa.",
  },
];

const Certificates = () => {
  return (
    <section id="certificates">
      <h5>My Achievements</h5>
      <h2>Certificates</h2>

      <Swiper
        className="container certificate__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="certificate">
              <div className="org__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="org__name">{name}</h5>
              <p className="org__review">{review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certificates;
