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
      <div className="h-[75vh]">
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
            <img src="https://www.simplyrecipes.com/thmb/KRw_r32s4gQeOX-d07NWY1OlOFk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1c-c2b1885d27d4481c9cfe6f6286a64342.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://hips.hearstapps.com/hmg-prod/images/comfort-food-recipes-64668a179574d.png?crop=1.00xw:0.502xh;0,0.236xh&resize=1200:*" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://hips.hearstapps.com/hmg-prod/images/delish-202002-pozole-0392-landscape-pf-1582315071.jpg?crop=1xw:0.8441943127962085xh;center,top&resize=1200:*" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.inspiredtaste.net/wp-content/uploads/2023/01/Easy-Bean-Salad-Recipe-Video.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.allrecipes.com/thmb/S3QRPeIXd1ME0L48YZRXHHr7lZU=/1500x2000/filters:no_upscale():max_bytes(150000):strip_icc()/2400-240708-broccoli-and-chicken-stir-fry-3x4-186-b7f290a400134ae9910f2e67ff50d9f2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://www.foodandwine.com/thmb/dMG6keGBcEF7XF8LZdR2y5dPrxc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jamaican-jerk-chicken-FT-RECIPE0918-eabbd55da31f4fa9b74367ef47464351.jpg" />
          </SwiperSlide>
        </Swiper>{" "}
      </div>
    </>
  );
};
