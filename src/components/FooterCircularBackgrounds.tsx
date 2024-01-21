import React from "react";

const FooterCircularBackgrounds = () => {
  return (
    <>
      <div className="absolute left-0 top-0 z-10 h-14 w-64 rounded-br-full bg-secondary"></div>
      <div className="absolute left-36 top-0 h-10 w-64 rounded-br-full bg-accent"></div>
      <div className="absolute bottom-0 right-0 z-10 h-20 w-72 rounded-t-full bg-secondary"></div>
      <div className="absolute -right-40 bottom-0 h-48 w-72 rounded-t-full bg-accent"></div>
    </>
  );
};

export default FooterCircularBackgrounds;
