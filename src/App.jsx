import React, { useEffect } from "react";
import {
  Header,
  Hero,
  Features,
  Inti,
  FeaturesSecond,
  Dinas,
  Footer,
} from "./components";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full  mx-auto text-[#00405C] overflow-hidden ">
      <Header />
      <Hero />
      <Features />
      <Inti />
      <FeaturesSecond />
      <Dinas />
      <Footer />
    </div>
  );
};

export default App;
