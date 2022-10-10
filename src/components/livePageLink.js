import React from "react";
import { NavLink } from "react-router-dom";

function livePageLink(props) {
  const { title, link = "/", target = "_self" } = props;
  return (
    <NavLink
      to={link}
      target={target}
      className={({ isActive }) =>
        `h-full flex-1 flex items-center justify-center uppercase text-10px bg-white-05 tracking-[.1em] relative before:content-[''] before:pointer-events-none before:absolute before:-bottom-2px before:left-0 before:w-full before:h-2px ${
          isActive
            ? "before:bg-hero text-white"
            : "before:bg-white-09 text-white-8"
        }`
      }
    >
      {title && title}
    </NavLink>
  );
}

export default livePageLink;
