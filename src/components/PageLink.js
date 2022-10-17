import React from "react";
import { NavLink } from "react-router-dom";

function PageLink(props) {
  const {
    title,
    link = "/",
    target = "_self",
    bg = "rgba(255,255,255,.05)",
    className,
    count,
  } = props;
  return (
    <NavLink
      to={link}
      target={target}
      style={{ backgroundColor: bg }}
      className={({ isActive }) =>
        `${className} h-full flex-1 flex items-center justify-center uppercase text-10px tracking-[.1em] relative before:content-[''] z-50 before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:w-full before:h-2px whitespace-nowrap px-10px ${
          isActive
            ? "before:bg-hero text-white sticky left-0 right-0 z-20"
            : "before:bg-white-09 text-white-8"
        }`
      }
    >
      <span className="relative text-inherit">
        {title && title}
        {count && (
          <span className="w-[15px] h-[15px] rounded-full absolute left-[90%] bottom-[96%] text-[8px] bg-[#7f194f] text-white z-20 flex items-center justify-center">
            {count}
          </span>
        )}
      </span>
    </NavLink>
  );
}

export default PageLink;
