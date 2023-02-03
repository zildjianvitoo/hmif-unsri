import React from "react";

// import data
import { features } from "../constants";

const FeaturesSecond = () => {
  const { title, subtitle, image } = features.feature2;
  return (
    <section data-aos="zoom-out-up" id="akademik" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col md:items-center lg:flex-row lg:gap-x-[100px] ">
          <div className="flex-1 flex flex-col mt-6 justify-center w-[80%] ">
            <h2 className="title lg:text-[35px] text-[#00405C]">{title}</h2>
            <p className="subtitle">{subtitle}</p>
          </div>

          <div className="flex-1 lg:ml-24 ">
            <img
              className="rounded-[3rem] w-[500px] hover:translate-y-[-6px] active:translate-y-0"
              src={image.type}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
