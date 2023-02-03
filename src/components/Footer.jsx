import React from "react";

import Logo from "../assets/img/logo-hmif.png";

import { footer } from "../constants";

const Footer = () => {
  return (
    <footer id="footer" className="section bg-primary text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-10 mb-10">
          <a className="mb-6 lg:mb-0" href="#">
            <img className="w-24" src={Logo} alt="" />
          </a>
          <div className="flex gap-x-2 mt-5">
            {footer.social.map((item, index) => {
              return (
                <div
                  className="w-12 h-12 text-2xl back rounded-full flex justify-center items-center transition-all hover:translate-y-[-6px] active:translate-y-0"
                  key={index}
                >
                  <a href="#">{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-center">{footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
