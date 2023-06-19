import React from "react";
import "../App.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <>
      <div className="h-96">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          navigation={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://bit.ly/3MSUbSo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bit.ly/3oUyjxY" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bit.ly/3OIiOUD" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bit.ly/43IRU34" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bit.ly/45REbbX" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://bit.ly/3IYIGYB" />
          </SwiperSlide>
        </Swiper>{" "}
      </div>
    </>
  );
};
