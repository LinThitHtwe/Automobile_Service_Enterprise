"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [shouldNavbarOpen, setShouldNavbarOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0  top-0 z-40 flex h-14 items-center justify-between bg-[#f8f8f8] p-3 backdrop-blur-sm  backdrop-filter md:p-5">
      <h1 className="font-koblenz text-4xl  font-extrabold tracking-wide text-primary/90">
        <a href="/">ASE</a>
      </h1>
      <ul className="mr-6 hidden w-auto gap-8 text-base font-[400] backdrop-blur-3xl sm:flex">
        <li className="nav-link-hover">
          <a href="#home">Home</a>
        </li>
        <li className="nav-link-hover">
          <a href="#about">About Us</a>
        </li>
        <li className="nav-link-hover">
          <a href="#services">Services</a>
        </li>
        <li className="nav-link-hover">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6 sm:hidden"
        onClick={() => setShouldNavbarOpen(!shouldNavbarOpen)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <div
        className={`absolute left-0 right-0 top-full h-auto w-full rounded-md rounded-b-lg   bg-clip-padding  px-5 py-3 backdrop-blur-2xl backdrop-filter transition-all duration-500 ease-in-out  ${
          shouldNavbarOpen
            ? "translate-y-0 bg-white  "
            : "-z-10 -translate-y-full bg-transparent"
        }`}
      >
        <ul
          className={`mr-6  w-auto gap-8 text-base font-medium transition-all duration-500 ease-in-out ${
            shouldNavbarOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <li className="nav-link-hover pb-3">
            <a href="#home">Home</a>
          </li>
          <li className="nav-link-hover pb-3">
            <a href="#about">About Us</a>
          </li>
          <li className="nav-link-hover pb-3">
            <a href="#services">Services</a>
          </li>
          <li className="nav-link-hover pb-3">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
