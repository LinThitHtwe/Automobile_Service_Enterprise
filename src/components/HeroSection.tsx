import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="mt-16 flex h-[73vh] p-10">
        <div className="flex h-full w-full items-center md:w-[50%]">
          <div className="ml-20 mt-14 h-auto">
            <h1 className="mb-6 font-koblenz text-6xl font-extrabold tracking-wider text-primary">
              Automobile Service Enterprise
            </h1>

            <p className="ml-2 text-2xl font-medium tracking-wide text-gray-600">
              More than just service. Setting new standards.
            </p>

            <p className="px-3 py-1 text-lg font-normal tracking-tight text-gray-600">
              +959 250 777003, +959 250 777005
            </p>
            <div className="flex gap-3">
              <a className="drop-shadow-primary/40 mt-6 block w-[30%] rounded-xl bg-primary px-2 py-3 text-center text-lg font-bold text-white drop-shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer hover:bg-[#f6903c]">
                Learn More
              </a>
              <a className="drop-shadow-primary/40 mt-6 block w-[30%] rounded-xl border-2 border-primary/60 px-2 py-3 text-center text-lg font-medium text-primary/90 drop-shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer hover:bg-primary/5">
                Email Us
              </a>
            </div>
          </div>
        </div>
        <div className="hidden h-full w-[50%] items-center justify-center pt-10 md:flex">
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
