import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./About.css";

// import "./styles.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";

const About = () => {
  return (
    <>
      {/* <section>
        <video autoplay muted loop id="about_video">
          <source src="../video/Night City_ Video Edit.mp4" type="video/mp4" />
        </video>
      </section> */}
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper">
        <SwiperSlide className="swiper_slide">Slide 1</SwiperSlide>
        <SwiperSlide className="swiper_slide">Slide 2</SwiperSlide>
        <SwiperSlide className="swiper_slide">Slide 3</SwiperSlide>
        <SwiperSlide className="swiper_slide">Slide 4</SwiperSlide>
        <SwiperSlide className="swiper_slide">Slide 5</SwiperSlide>
        <SwiperSlide className="swiper_slide">Slide 6</SwiperSlide>
      </Swiper>
    </>
  );
};

export default About;
