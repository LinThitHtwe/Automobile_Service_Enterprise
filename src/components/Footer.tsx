import React from "react";
import FooterCircularBackgrounds from "./FooterCircularBackgrounds";

const Footer = () => {
  return (
    <div className="relative grid h-auto  grid-cols-1 gap-3 bg-primary sm:grid-cols-2  md:grid-cols-4">
      <FooterCircularBackgrounds />
      <div
        className="footer-item-container  cursor-default  p-10
        "
      >
        <p className="font-koblenz text-6xl font-extrabold tracking-wide  lg:text-7xl">
          ASE
        </p>
        <p className="mt-1 text-center text-xl font-medium tracking-wide  md:w-[30%] md:text-start">
          Automobile Service Enterprise
        </p>
      </div>

      <div className="footer-item-container  pt-0 sm:pt-8 " id="contact">
        <p className="footer-item-title py-2  ">Contact Us</p>
        <div className="mt-2 flex flex-col  items-center gap-y-3 md:items-start">
          <div className="flex items-center gap-1 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 rotate-3"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="cursor-copy pb-1">+959 250 777003</span>
          </div>
          <div className="flex items-center font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 rotate-3"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="pb-1">+959 250 777005</span>
          </div>

          <div className="flex -translate-x-1 items-center gap-1 font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <span className="break-all pb-1">
              : aseautoservice.mm@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="footer-item-container  mb-0  pt-10 sm:mb-10 md:mb-2">
        <p className="footer-item-title ">Socials</p>
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex w-fit cursor-pointer items-center gap-2 font-medium transition-all duration-500 ease-in-out hover:-translate-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-5 w-5 "
              fill="currentColor"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
            <span className="">ASE Auto Service</span>
          </div>
          <div className="flex w-fit cursor-pointer items-center gap-2 font-medium transition-all duration-500 ease-in-out hover:-translate-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-5 w-5 "
              fill="currentColor"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
            <span>ASE</span>
          </div>
        </div>
      </div>
      <div className="footer-item-container mb-14   pt-10  md:mb-0  ">
        <p className="footer-item-title">Location</p>
        <div className="mt-3 flex items-center gap-1 font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clipRule="evenodd"
            />
          </svg>

          <span className="font-medium">Location</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
