import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function PageLink({
  title,
  link = "/",
  target = "_self",
  bg = "rgba(255,255,255,.05)",
  className = "flex-1 text-10px uppercase px-10px",
  count,
  countClassName = "w-[15px] h-[15px] rounded-full absolute left-[90%] bottom-[96%] text-[8px] bg-[#7f194f] text-white z-20 flex items-center justify-center",
  inActiveClassName = "before:bg-white-09 text-white-8",
  Icon,
  sticky = true,
}) {
  const [active, setActive] = useState(false);

  return (
    <NavLink
      to={link}
      end
      target={target}
      style={{ backgroundColor: bg }}
      className={({ isActive }) => {
        setActive(isActive);

        return `${className} h-full flex items-center justify-center  tracking-[.1em] relative before:content-[''] z-50 before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:w-full before:h-2px whitespace-nowrap ${
          isActive
            ? `before:bg-hero text-white ${
                sticky && "sticky left-0 right-0"
              } z-20`
            : inActiveClassName
        }`;
      }}
    >
      <span className="relative text-inherit">
        {title && title}
        {Icon && <Icon isActive={active} />}
        {count && <span className={countClassName}>{count}</span>}
      </span>
    </NavLink>
  );
}

export default PageLink;
