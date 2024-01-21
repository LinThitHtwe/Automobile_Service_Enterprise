import React from "react";
import FooterCircularBackgrounds from "./FooterCircularBackgrounds";

const Footer = () => {
  return (
    <div className="relative flex h-80 w-full items-center justify-around bg-primary">
      <FooterCircularBackgrounds />
      <div className="z-20 flex  h-auto w-[25%] flex-col justify-center p-10">
        <p className="font-koblenz text-7xl font-extrabold tracking-wide text-white">
          ASE
        </p>
        <p className="mt-1 w-[30%] text-xl font-medium tracking-wide text-white">
          Automobile Service Enterprise
        </p>
      </div>
      <div className="z-20 flex w-[25%] flex-col justify-center text-white">
        <p className="text-2xl font-bold tracking-wide ">Contact Us</p>
        <div className="mt-3 flex flex-col gap-1">
          <div className="font-medium"> +959 250 777003</div>
          <div className="font-medium"> +959 250 777005</div>
        </div>
        <div className="font-medium"> aseautoservice.mm@gmail.com</div>
      </div>
      <div className="z-20 w-[25%] text-white">
        <p className="text-2xl font-bold tracking-wide ">Socials</p>
        <div className="mt-3 flex flex-col gap-1">
          <div className="font-medium"> facebook</div>
          <div className="font-medium"> facebook</div>
        </div>
      </div>
      <div className="z-20  w-[25%]  text-white">
        <p className="text-2xl font-bold tracking-wide ">Location</p>
        <div className="mt-3 font-medium"> Location</div>
      </div>
    </div>
  );
};

export default Footer;
