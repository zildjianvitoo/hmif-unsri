import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../slider.css";
import "../card.css";
import { Navigation, Pagination } from "swiper";
import { dinas } from "../constants";

const DinasSlider = () => {
  const { pages } = dinas;
  return (
    <div data-aos="zoom-in-up" className="min-h-[800px]">
      {pages.map((page, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="slider-setting">
              {page.dinasList.map((dinas, index) => {
                const { image } = dinas;
                return (
                  <div class="card my-2">
                    <div class="card2">
                      <img
                        src={image.type}
                        alt=""
                        className="z-20 rounded-2xl  "
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </div>
  );
};

export default DinasSlider;
