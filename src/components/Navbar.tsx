import React from "react";

const Navbar = () => {
  return (
    <nav className="flex h-14 items-center justify-between p-3 md:p-5">
      <h1 className="text-primary/90 font-koblenz  text-4xl font-extrabold tracking-wide">
        ASE
      </h1>
      <ul className="mr-6 flex w-auto gap-8 text-base font-[400]">
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
