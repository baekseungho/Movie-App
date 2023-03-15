import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import "./Textarea.css";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper";

function Textarea({ summary }) {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={"auto"}
      freeMode={true}
      scrollbar={true}
      mousewheel={true}
      modules={[FreeMode, Scrollbar, Mousewheel]}
      className="mySwiper"
    >
      <div className="summary">
        <SwiperSlide>{summary}</SwiperSlide>
      </div>
    </Swiper>
  );
}

export default Textarea;
