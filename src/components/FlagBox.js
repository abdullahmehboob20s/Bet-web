import React from "react";

function FlagBox({ countryName, className }) {
  return (
    <div
      className={`min-w-[22px] h-[14px] bg-flags bg-no-repeat bg-cover ${className} ${countryName}`}
    ></div>
  );
}

export default FlagBox;
