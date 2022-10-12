import React from "react";

const BG = "rgba(255,255,255,.15)";

function ButtonSelector({ title, color, Icon, isSelected = false }) {
  return (
    <button
      className="flex items-center space-x-10px h-[28px] px-4 rounded bg-inherit hover:bg-[rgba(255,255,255,.35)] transition-all duration-[.25s] cursor-pointer border-none outline-none"
      style={{ backgroundColor: isSelected ? color : BG }}
    >
      {Icon && <Icon style={{ fill: isSelected ? "white" : color }} />}
      <span className="text-xs text-white-9 whitespace-nowrap">{title}</span>
    </button>
  );
}

export default ButtonSelector;
