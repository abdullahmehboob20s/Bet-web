import React from "react";

const ACTIVE_CLASSNAME =
  "before:absolute before:bottom-0 before:left-0 before:w-full before:h-1px before:bg-hero bg-white-2 text-white";

function TabButton({ title, active = false }) {
  return (
    <button
      className={`text-xs block w-full hover:bg-white-2 hover:text-white transition-all duration-[.24s] h-full relative  ${
        active ? ACTIVE_CLASSNAME : "bg-white-1 text-white-5"
      }`}
    >
      {title}
    </button>
  );
}

export default TabButton;
