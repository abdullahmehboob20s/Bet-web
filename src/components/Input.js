import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Input = ({
  label,
  name,
  type = "text",
  disabled = false,
  val = "",
  ...rest
}) => {
  const [typeState, setTypeState] = useState(type);
  const [value, setValue] = useState(val);

  const togglePasswordType = () => {
    if (type === "password") {
      setTypeState((val) => (val === "password" ? "text" : "password"));
    }
  };

  return (
    <div className={`relative z-0 ${disabled ? "opacity-60" : "opacity-100"}`}>
      <input
        {...rest}
        id={name}
        type={typeState}
        className="floating-label w-full appearance-none focus:outline-none pl-[15px] text-white-9 flex flex-col h-[52px] bg-[rgba(255,255,255,0.15)] rounded pr-[44px] text-sm pt-4"
        placeholder=" "
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
      />
      <label
        htmlFor={name}
        className="absolute duration-300 pointer-events-none top-[18px] left-4 -z-1 origin-0 text-gray-500 text-xs text-white-4"
        style={{ textTransform: "none" }}
      >
        {label}
      </label>

      {typeState === "password" && type === "password" && value !== "" ? (
        <button
          onClick={togglePasswordType}
          type="button"
          className="absolute right-4 vertical-position-center z-20 text-2xl"
        >
          <AiFillEyeInvisible className="fill-white-7" />
        </button>
      ) : null}

      {type === "password" && typeState === "text" && value !== "" ? (
        <button
          onClick={togglePasswordType}
          type="button"
          className="absolute right-4 vertical-position-center z-20 text-2xl"
        >
          <AiFillEye className="fill-white-7" />
        </button>
      ) : null}
    </div>
  );
};

export default Input;
