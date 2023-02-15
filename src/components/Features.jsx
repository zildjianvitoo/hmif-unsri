import React from "react";
import { features } from "../constants";
wkwk
const Features = () => {
  const { image, title, subtitle, items } = features;

  return (
    <section data-aos="fade-right" id="about" className="section ">
      <div className="container mx-auto mt-[8rem] lg:mt-4">
        <div className="flex flex-col lg:flex-row lg:gap-x-[100px]">
          <div className="flex-1 order-1 lg:-order-1 lg:mt-24">
            <img className="rounded-md" src={image.type} alt="" />
          </div>
          <div className=" flex-1 flex flex-col justify-end mb-4">
            <h2 className="title text-[#00405C]">{title}</h2>
            <p className="subtitle">{subtitle}</p>
            <div>
              {items.map((item, index) => {
                const { title, subtitle, icon } = item;
                return (
                  <div key={index} className="flex mb-5 lg:last:mb-0">
                    <div className="text-2xl mr-4 lg:text-3xl">{icon}</div>
                    <div>
                      <h4 className="text-base lg:text-xl font-semibold">
                        {title}
                      </h4>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
