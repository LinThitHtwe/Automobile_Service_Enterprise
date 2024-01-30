import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0  top-0 z-40 flex h-14 items-center justify-between bg-[#f8f8f8] p-3 backdrop-blur-sm  backdrop-filter md:p-5">
      <h1 className="font-koblenz text-4xl  font-extrabold tracking-wide text-primary/90">
        ASE
      </h1>
      <ul className="mr-6 hidden w-auto gap-8 text-base font-[400] backdrop-blur-3xl md:flex">
        <li>
          <span>Home</span>
        </li>
        <li>
          <span>About Us</span>
        </li>
        <li>
          <span>Services</span>
        </li>
        <li>
          <span>Contact Us</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
