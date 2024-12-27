import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "../../styles/cards/_projectCard.scss";

const ProjectCard = ({ title, subtitle, images, date, link }) => {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>

      <Swiper
        modules={[Scrollbar]}
        pagination={{ clickable: true }}
        scrollbar={{ hide: false }}
        slidesPerView={1}
        loop={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image}
            alt={`${title}-${index}`}
            loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>

      <p>{date}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <p className="btn">View project</p>
      </a>
    </div>
  );
};

export default ProjectCard;
