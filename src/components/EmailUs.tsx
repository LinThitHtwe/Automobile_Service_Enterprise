import Image from "next/image";
import React from "react";

const EmailUs = () => {
  return (
    <div className="flex h-auto min-h-[620px]  px-6  py-6 shadow-sm md:min-h-[500px] lg:px-24">
      <div className="hidden h-auto w-1/3 flex-col  justify-between rounded-l-xl  bg-gradient-to-br from-primary via-primary to-[#f88746] p-3 md:flex">
        <h3 className="ml-3 mt-5 max-w-[40%] text-start  text-4xl font-bold tracking-tight text-background xl:text-5xl ">
          Have a Discussion with Us
        </h3>
        <div className=" flex h-auto justify-center  rounded-full  p-2">
          <div className="w-[80%]">
            <Image alt="Mail" src={"mail.svg"} width={400} height={400} />
          </div>
        </div>
      </div>
      <div className=" flex h-auto w-full flex-col items-center justify-evenly gap-1 rounded-xl border bg-white md:w-2/3 md:rounded-none md:rounded-r-xl md:border-y md:border-r">
        <h1 className="mx-4  mb-6 mt-12 text-center text-2xl font-bold text-primary md:hidden">
          Have a Discussion with Us
        </h1>
        <div className="flex w-[80%] flex-col justify-between gap-3 md:mt-6 md:flex-row md:gap-0 ">
          <div className="flex flex-col md:w-2/5">
            <label className="text-lg font-semibold text-gray-800/80 md:mb-2">
              Name
            </label>
            <input
              placeholder="John Doe"
              type="text"
              className="rounded-xl border border-gray-600/20  px-2 py-1 text-gray-700/90 outline-none"
            />
          </div>
          <div className="flex flex-col md:w-2/5">
            <label className="text-lg font-semibold text-gray-800/80 md:mb-2">
              Email
            </label>
            <input
              placeholder="example@email.com"
              type="email"
              className="rounded-xl border border-gray-600/20  px-2 py-1 text-gray-700/90 outline-none"
            />
          </div>
        </div>
        <div className="flex h-[60%] w-[80%] flex-col">
          <label className="text-lg font-semibold text-gray-800/80">
            Message
          </label>
          <textarea
            placeholder="Your Message"
            className="h-full rounded-xl border border-gray-600/20 p-3 text-gray-700/90 outline-none"
          />
        </div>
        <div className="my-6 flex w-[80%] items-center justify-end">
          <button className="  items-center rounded-xl  text-center text-lg font-semibold text-primary md:text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailUs;
