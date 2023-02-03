import React from "react";
import { stats } from "../constants";
import classes from "./module/Stats.module.css";

const Stats = () => {
  return (
    <div data-aos="zoom-in" className={`bg-[#00405C] rounded-[20px] p-12`}>
      <div className="flex flex-wrap gap-y-8">
        {stats.map((item, index) => {
          return (
            <div className={`${classes.background}`} key={index}>
              <div className="text-2xl font-semibold lg:text-4xl">
                {item.value}
              </div>
              <div className="text-base font-light max-w-[110px] mx-auto lg:text-xl">
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
