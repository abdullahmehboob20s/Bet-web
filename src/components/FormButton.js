import React from "react";

// DISABLED STYLING
const DEFAULT_VARIANT_DISABLED_CLASSNAME =
  "disabled:opacity-60 disabled:pointer-events-none";
const VARIANT_2_DISABLED_CLASSNAME = "disabled:opacity-60 disabled:bg-white-1";

// CLASSNAMES
const VARIANT_DEFAULT_CLASSNAME =
  "bg-white-2 text-white-7 h-[36px] rounded w-full text-center px-5 text-xs font-medium";

const VARIANT_2_CLASSNAME =
  "text-wite uppercase bg-oc-1 transition-all duration-[.24s] text-center rounded text-xs w-full h-9 hover:bg-oc-1-hover";

const variants = [VARIANT_DEFAULT_CLASSNAME, VARIANT_2_CLASSNAME];
const disabledVariants = [
  DEFAULT_VARIANT_DISABLED_CLASSNAME,
  VARIANT_2_DISABLED_CLASSNAME,
];

function FormButton({
  label,
  type = "button",
  onClick,
  disabled = false,
  variant = 0,
  disabledClassName = disabledVariants[variant],
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${variants[variant]} ${disabledClassName}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default FormButton;
