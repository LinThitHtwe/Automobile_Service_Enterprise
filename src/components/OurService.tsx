import Image from "next/image";
import React from "react";
import ServicesCircularBackground from "./ServicesCircularBackground";

const OurService = () => {
  return (
    <div className="px-6 pb-5 lg:px-16">
      <div
        id="services"
        className="relative flex max-h-full min-h-[400px] overflow-hidden rounded-xl bg-primary p-3 shadow-lg shadow-primary/20 transition-all duration-500 ease-in-out hover:scale-[1.01] "
      >
        <ServicesCircularBackground />
        <div className="md-4/5 z-10 w-full lg:w-2/3">
          <h1 className="py-2 text-center text-3xl font-bold text-background md:px-8 md:text-start md:text-5xl">
            Our Services
          </h1>
          <div className="grid grid-cols-1 gap-5 py-3 text-background  min-[425px]:grid-cols-2 sm:gap-10 md:ml-16 md:mt-8 lg:grid-cols-3 lg:gap-0">
            <ul className="services_ul">
              <li className="py-2">Lorem</li>
              <li className="py-2">Lorem</li>
              <li className="py-2">Lorem</li>
              <li className="py-2">Lorem</li>
            </ul>
            <ul className="services_ul">
              <li className="py-2">Lorem</li>
              <li className="py-2">Lorem</li>
              <li className="py-2">Lorem</li>
              <li className="py-2">Lorem</li>
            </ul>
            <ul className="services_ul">
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
