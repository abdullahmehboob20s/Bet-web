import React from "react";

function BottomBarLink(props) {
  const { title, icon, isButton = false, onClick } = props;
  return isButton ? (
    <button
      onClick={onClick}
      className="flex-1 h-full py-0 px-4px flex flex-col items-center justify-center"
    >
      {icon}
      <span className="text-10px text-white-5">{title}</span>
    </button>
  ) : (
    <a
      {...props}
      className="flex-1 h-full py-0 px-4px flex flex-col items-center justify-center cursor-pointer"
    >
      {icon}
      <span className="text-10px text-white-5">{title}</span>
    </a>
  );
}

export default BottomBarLink;
