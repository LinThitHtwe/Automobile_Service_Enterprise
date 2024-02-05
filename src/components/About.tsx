import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" mt-10 h-full p-3 md:p-10 ">
      <div className="about-wrapper">
        <div className="about-image-container ">
          <Image
            src={"/workshop_pic_1.png"}
            alt="Workshop 1"
            width={800}
            height={800}
            className="about-image"
          />
        </div>
        <div className="about-text-wrapper flex flex-col justify-center">
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
      <div className="about-wrapper md:my-20 ">
        <div className="about-text-wrapper   order-2 md:order-1">
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
        <div className="about-image-container order-1 md:order-2 ">
          <Image
            src={"/workshop_pic_2.png"}
            alt="Workshop 1"
            width={500}
            height={200}
            className="about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
