import React from "react";
import { NavLink } from "react-router-dom";

function PageLink(props) {
  const {
    title,
    link = "/",
    target = "_self",
    bg = "rgba(255,255,255,.05)",
    className,
  } = props;
  return (
    <NavLink
      to={link}
      target={target}
      style={{ backgroundColor: bg }}
      className={({ isActive }) =>
        `${className} h-full flex-1 flex items-center justify-center uppercase text-10px tracking-[.1em] relative before:content-[''] before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:w-full before:h-2px whitespace-nowrap px-10px ${
          isActive
            ? "before:bg-hero text-white sticky left-0 right-0 z-20"
            : "before:bg-white-09 text-white-8"
        }`
      }
    >
      {title && title}
    </NavLink>
  );
}

export default PageLink;
