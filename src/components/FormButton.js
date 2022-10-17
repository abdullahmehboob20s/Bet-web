import React from "react";

const VARIANT_DEFAULT_CLASSNAME =
  "bg-white-2 disabled:opacity-60 disabled:pointer-events-none text-white-7 h-[36px] rounded w-full text-center px-5 text-xs font-medium";

const VARIANT_2_CLASSNAME =
  "text-wite uppercase bg-oc-1 transition-all duration-[.24s] text-center rounded text-xs w-full h-9 hover:bg-oc-1-hover disabled:opacity-60 disabled:bg-white-1";

const variants = [VARIANT_DEFAULT_CLASSNAME, VARIANT_2_CLASSNAME];

function FormButton({
  label,
  type = "button",
  onClick,
  disabled = false,
  variant = 0,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={variants[variant]}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default FormButton;
