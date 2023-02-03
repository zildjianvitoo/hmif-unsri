import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { bphInti } from "../constants";

const IntiSlider = () => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {bphInti.paraInti.map((inti, index) => {
        return (
          <SwiperSlide className="max-w-[265px]" key={index}>
            <div className="relative hover:translate-y-[-6px] active:translate-y-0">
              <img src={inti.image.type} className="rounded-3xl" alt="" />
              <div className="absolute w-full text-white bottom-[20px] text-center text-[18px] lg:text-2xl  font-medium capitalize">
                {inti.name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default IntiSlider;
