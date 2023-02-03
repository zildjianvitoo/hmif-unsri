import React from "react";
import { hero } from "../constants";
import { Stats } from "../components";
import classes from "./module/Hero.module.css";
import Badge from "../assets/img/pita-lancip-pendek.png";
import Logo from "../assets/img/logo-hmif.png";

const Hero = () => {
  const { title, subtitle, buttonText } = hero;
  return (
    <section id="home" className={`${classes.section}`} >
      <div className="grid grid-cols-3 place-items-center mb-10 mt-10">
        <img src={Badge} alt="" className="w-72 mb-10 rotate-180  " />
        <img src={Logo} alt="" className="w-24" />
        <img src={Badge} alt="" className="w-72 mb-10" />
      </div>

      <div className="container mx-auto text-center">
        <h1 className={`${classes.h1}`}>{title}</h1>
        <h2 className={`${classes.h2}`}>{subtitle}</h2>
        <button className={`${classes.button}`}>{buttonText}</button>
        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
