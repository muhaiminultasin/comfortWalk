"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
// import slider1 from ""

const Slider = () => {
  return (
    <Swiper
    
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img loading="lazy" className="h-inh" src={"/images/Slider1.png"}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" className="h-inh" src={"/images/Slider2.jpg"}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" className="h-inh" src={"/images/Slider3.jpg"}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" className="h-inh" src={"/images/Slider1.png"}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" className="h-inh" src={"/images/Slider2.jpg"}></img>
      </SwiperSlide>
      <SwiperSlide>
        <img loading="lazy" className="h-inh" src={"/images/Slider3.jpg"}></img>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
