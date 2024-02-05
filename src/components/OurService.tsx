import Image from "next/image";
import React from "react";

const OurService = () => {
  return (
    <div className="px-6 pb-5 lg:px-16">
      <div className="relative  flex max-h-full min-h-[400px] overflow-hidden rounded-xl bg-primary p-3 shadow-lg shadow-primary/20 ">
        <div className="absolute -bottom-40  -left-40  h-64  w-64 rounded-full bg-accent/80  md:-bottom-28"></div>
        <div className="absolute -top-32 left-56 h-52  w-96  rounded-full bg-accent/80  min-[532px]:left-96 md:left-64 md:hidden"></div>
        <div className="absolute -bottom-52 left-4  h-64  w-64 rounded-full bg-secondary/80 md:-bottom-40"></div>
        <div className="absolute bottom-0 left-1/2 top-0 hidden  max-h-full  min-h-[400px] w-[50%] rounded-l-full bg-accent/80 lg:inline-block"></div>
        <div className="absolute bottom-0 left-2/3 top-0 hidden  max-h-[80%]  min-h-[30px] w-[50%] rounded-l-full bg-secondary/60 min-[740px]:inline-block"></div>
        <div className="md-4/5 z-10 w-full lg:w-2/3">
          <h1 className="py-2 text-center text-3xl font-bold text-white md:px-8 md:text-start md:text-5xl">
            Our Services
          </h1>
          <div className="grid grid-cols-1 gap-5 py-3 text-white  min-[425px]:grid-cols-2 sm:gap-10 md:ml-16 md:mt-8 lg:grid-cols-3 lg:gap-0">
            <ul className="flex list-disc flex-col items-center text-xl tracking-wider md:items-start md:text-2xl  ">
              <li className="py-2">Lorem</li>
              <li className="py-2">Lorem</li>
              <li className="py-2">Lorem</li>
              <li className="py-2">Lorem</li>
            </ul>
            <ul className="flex  list-disc flex-col items-center text-xl tracking-wider md:items-start md:text-2xl">
              <li className="py-2">Lorem</li>
              <li className="py-2">Lorem</li>
              <li className="py-2">Lorem</li>
              <li className="py-2">Lorem</li>
            </ul>
            <ul className="flex  list-disc flex-col items-center text-xl tracking-wider md:items-start md:text-2xl">
              <li className="py-2">Lorem</li>
              <li className="py-2">Lorem</li>
              <li className="py-2">Lorem</li>
              <li className="py-2">Lorem</li>
            </ul>
          </div>
        </div>
        <div className="z-20 hidden w-1/3 p-2 lg:inline-block">
          <div className="h-full rounded-md  p-8">
            <Image
              alt="ASE auto service"
              src={"/trip.svg"}
              width={400}
              height={400}
              className="h-full w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
