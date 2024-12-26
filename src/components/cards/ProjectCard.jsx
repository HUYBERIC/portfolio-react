import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/cards/_projectCard.scss";

const ProjectCard = ({ id, title, subtitle, images, date, link }) => {
  const swiperRef = useRef(null);

  return (
    <div className="project-card">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>

      <Swiper
        ref={swiperRef}
        key={id}
        modules={[Navigation, Pagination, Scrollbar]}
        observer={true}
        observeParents={true}
        pagination={{ clickable: true }}
        scrollbar={{ hide: true }}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        slidesPerGroup={1}
        navigation={true}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`${title} slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <p>{date}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="btn">LINK</button>
      </a>
    </div>
  );
};

export default ProjectCard;