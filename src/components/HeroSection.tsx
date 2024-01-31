import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="mt-16 flex h-[73vh] p-10">
        <div className="flex h-full w-full items-center justify-center lg:w-[50%] lg:justify-start">
          <div className="mt-14 h-auto lg:ml-20">
            <h1 className="mb-6 bg-background text-center font-koblenz text-5xl  font-extrabold tracking-wider text-primary md:text-7xl lg:text-start">
              Automobile Service Enterprise
            </h1>

            <p className="ml-2 text-center text-xl font-medium tracking-wide text-gray-800/80 md:text-2xl lg:text-start">
              More than just service. Setting new standards.
            </p>

            <p className="px-3 py-1 text-center text-base font-normal tracking-tight text-gray-800/80 md:text-lg lg:text-start">
              +959 250 777003, +959 250 777005
            </p>
            <div className="flex justify-center gap-3 lg:justify-start">
              <button className="hero-section-btn drop-shadow-primary/40 bg-primary font-bold  text-white drop-shadow-md hover:bg-[#f6903c]  min-[321px]:w-[38%]  sm:w-[26%] lg:w-[30%]">
                Learn More
              </button>
              <button className="hero-section-btn drop-shadow-primary/40 border-2 border-primary/60 font-medium  text-primary/90 hover:bg-primary/5  min-[321px]:w-[38%]  sm:w-[26%] lg:w-[30%]">
                Email Us
              </button>
            </div>
          </div>
        </div>
        <div className="hidden h-full w-[50%] items-center justify-center pt-10 lg:flex">
          <Image
            className="ml-32"
            alt="car_repair"
            src={"car_art.svg"}
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
