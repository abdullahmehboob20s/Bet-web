import React from "react";
import { Link } from "react-router-dom";

function NavBannerLink({ title, link = "/", target = "_self", isNew = false }) {
  return (
    <Link
      to={link}
      className="bg-menu border-b-2 border-white-05 h-full flex items-center justify-center text-10px uppercase px-10px tracking-[.1em] w-full whitespace-nowrap text-center"
      target={target}
    >
      <span className="relative block text-white-8">
        {title}
        {isNew && (
          <span className="w-fit absolute right-0 bottom-[100%] text-[8px] rounded bg-[#7f194f] text-white h-[12px] max-w-[99%] px-4px z-20">
            New
          </span>
        )}
      </span>
    </Link>
  );
}

export default NavBannerLink;
