import React, { useState } from "react";

function SportCard({
  id,
  title,
  Icon,
  isSelected,
  color = "rgba(255,255,255,.1)",
  onClick,
  selectedBgColor,
  showId = true,
}) {
  return (
    <button
      onClick={() => onClick(id)}
      className={`outline-none p-5px rounded text-white-5 relative flex flex-col min-w-[80px] h-[60px] text-center items-center justify-center shrink-0 ${
        isSelected ? "sticky left-0 right-0 z-50" : ""
      }`}
      style={{
        backgroundColor: isSelected
          ? selectedBgColor
            ? selectedBgColor
            : color
          : "rgba(255,255,255,.1)",
      }}
    >
      <span className="h-[38px] flex items-center justify-center">
        {Icon && <Icon style={{ fill: isSelected ? "white" : color }} />}
      </span>
      <span
        className={`text-10px block whitespace-nowrap ${
          isSelected ? "text-white" : "text-white-5"
        }`}
      >
        {title}
      </span>

      {showId && (
        <span className="text-[9px] text-white absolute top-3px right-[16%]">
          {id}
        </span>
      )}
    </button>
  );
}

export default SportCard;
