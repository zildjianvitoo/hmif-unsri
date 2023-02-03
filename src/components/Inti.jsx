import React, { useEffect } from "react";
import { bphInti } from "../constants";
import IntiSlider from "./IntiSlider";

const NewItems = () => {
  const { title, subtitle, link, icon } = bphInti;
  return (
    <section
      data-aos="fade-left"
      id="inti"
      className="section relative overflow-hidden lg:min-h-[540px]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0">
            <h2 className="title max-w-[245px] lg:mt-[30px] lg:mb-[90px] text-[#00405C]">
              {title}
            </h2>
            <p className="max-w-[245px] lg:mb-12">{subtitle}</p>
            <div className="hidden lg:flex items-center">
              <a
                className="hover:border-b border-primary lg:items-center font-medium transition-all"
                href="#inti"
              >
                {link}
              </a>
              <div className="text-3xl">{icon}</div>
            </div>
          </div>
          <div className="lg:max-w-[800px] xl:max-w-[990px] lg:absolute lg:-right-24">
            <IntiSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
