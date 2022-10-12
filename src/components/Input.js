import React from "react";

const Input = ({ label, name, type = "text", ...rest }) => {
  return (
    <div className="relative z-0">
      <input
        {...rest}
        id={name}
        type={type}
        className="floating-label w-full appearance-none focus:outline-none pl-[15px] text-white-9 flex flex-col h-[52px] bg-[rgba(255,255,255,0.15)] rounded pr-[44px] text-sm pt-4"
        placeholder=" "
      />
      <label
        htmlFor={name}
        className="absolute duration-300 pointer-events-none top-[18px] left-4 -z-1 origin-0 text-gray-500 text-xs text-white-4"
        style={{ textTransform: "none" }}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
