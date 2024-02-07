import React from "react";

const ServicesCircularBackground = () => {
  return (
    <>
      <div className="absolute -bottom-40  -left-40  h-64  w-64 rounded-full bg-accent/80  md:-bottom-28"></div>
      <div className="absolute -top-32 left-56 h-52  w-96  rounded-full bg-accent/80  min-[532px]:left-96 md:left-64 md:hidden"></div>
      <div className="absolute -bottom-52 left-4  h-64  w-64 rounded-full bg-secondary/80 md:-bottom-40"></div>
      <div className="absolute bottom-0 left-1/2 top-0 hidden  max-h-full  min-h-[400px] w-[50%] rounded-l-full bg-accent/80 lg:inline-block"></div>
      <div className="absolute bottom-0 left-2/3 top-0 hidden  max-h-[80%]  min-h-[30px] w-[50%] rounded-l-full bg-secondary/60 min-[740px]:inline-block"></div>
    </>
  );
};

export default ServicesCircularBackground;
