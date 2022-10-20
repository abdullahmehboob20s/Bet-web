import React from "react";
import { Link } from "react-router-dom";

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
    <Link
      {...props}
      className="flex-1 h-full py-0 px-4px flex flex-col items-center justify-center cursor-pointer"
    >
      {icon}
      <span className="text-10px text-white-5">{title}</span>
    </Link>
  );
}

export default BottomBarLink;
