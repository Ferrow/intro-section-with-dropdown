import React from "react";
import heroLogo from "../assets/image-hero-mobile.png";
import heroDesktopLogo from "../assets/image-hero-desktop.png";
import audioLogo from "../assets/client-audiophile.svg";
import dataLogo from "../assets/client-databiz.svg";
import makerLogo from "../assets/client-maker.svg";
import meetLogo from "../assets/client-meet.svg";

const Hero = () => {
  return (
    <main className="md:flex md:mt-16 md:w-full md:px-20 md:py-8 ">
      <div className="order-2">
        <img className="md:hidden" src={heroLogo} alt="" />
        <img className="hidden md:block w-full" src={heroDesktopLogo} alt="" />
      </div>
      <div className="flex  flex-col items-center md:items-start mx-6 md:mx-2 md:pr-0 xl:pr-32 text-center md:text-left md:min-w-[55%]">
        <h1 className="text-4xl font-bold mt-8 md:text-5xl lg:mt-8 lg:text-7xl xl:mt-32 xl:max-w-[446px]">
          Make remote work
        </h1>
        <p className="text-lg mt-5 md:mt-16 md:w-[70%]">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-black border border-black text-white text-lg font-bold tracking-wider md:mt-16 py-3 w-44 mx-auto md:mx-0 my-6 rounded-2xl hover:bg-white hover:text-black hover:border hover:border-black">
          Learn More
        </button>
        <div className="flex mt-6 px-6 md:px-0 w-full justify-between md:max-w-[80%] md:mt-20 md:grow md:items-end">
          <img src={dataLogo} alt="" className="h-4 lg:h-4" />
          <img src={audioLogo} alt="" className="h-5 lg:h-6" />
          <img src={meetLogo} alt="" className="h-4 lg:h-4" />
          <img src={makerLogo} alt="" className="h-4 lg:h-5" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
