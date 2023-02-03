import React from "react";

import { navigation } from "../constants";

const NavMobile = (props) => {
  return (
    <nav className="bg-[#00405C] text-white shadow-2xl w-full h-full">
      <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
        {navigation.map((item, index) => {
          return (
            <li key={index} className="text-white">
              <a
                className={`text-xl font-medium capitalize ${
                  props.bg ? "text-white" : "text-[#00405C]"
                }`}
                href={item.href}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
