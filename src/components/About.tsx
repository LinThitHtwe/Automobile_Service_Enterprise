import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" my-10 h-full p-3 md:p-10 ">
      <div className="flex max-h-full flex-col overflow-hidden md:max-h-96 md:flex-row">
        <div className="w-full overflow-hidden p-3 md:w-1/2">
          <Image
            src={"/workshop_pic_1.png"}
            alt="Workshop 1"
            width={800}
            height={800}
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:px-3 md:py-2">
          <h4 className="px-6 py-2 text-4xl font-bold tracking-tight text-gray-900/90">
            Lorem ipsum dolor sit
          </h4>
          <p className="break-words px-6 py-2 text-lg tracking-wide text-gray-600/90">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            sequi aliquam reprehenderit reiciendis id ullam et saepe deleniti
            tenetur? Expedita eum repudiandae optio et cum veniam reiciendis
            veritatis ducimus debitis?
          </p>
        </div>
      </div>
      <div className="flex flex-col md:my-20 md:flex-row ">
        <div className="order-2 w-full  md:order-1 md:w-1/2 md:px-3 md:py-2">
          <h4 className="px-6 py-2 text-4xl font-bold tracking-tight text-gray-900/90">
            Lorem ipsum dolor sit
          </h4>
          <p className="break-words px-6 py-2 text-lg tracking-wide text-gray-600/90">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            reiciendis nostrum quisquam iure, ipsum dignissimos error alias
            quis. Eaque deserunt ad maxime voluptate unde suscipit voluptas
            minus facilis adipisci exercitationem!
          </p>
        </div>
        <div className="order-1 max-h-full w-full p-3  md:order-2 md:max-h-96 md:w-1/2">
          <Image
            src={"/workshop_pic_2.png"}
            alt="Workshop 1"
            width={500}
            height={200}
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
