import React from "react";

import { dinas } from "../constants";

import DinasSlider from "./DinasSlider";

const Dinas = () => {
  const { title, subtitle } = dinas;
  return (
    <section id="dinas" className="section text-center">
      <div className="container mx-auto">
        <div>
          <h2 className="title text-[#00405C]">{title}</h2>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]">
            {subtitle}
          </p>
        </div>
        <DinasSlider />
      </div>
    </section>
  );
};

export default Dinas;
