import React from "react";

function NavBannerLink({ title, link = "/", target = "_self", isNew = false }) {
  return (
    <a
      className="text-10px uppercase px-10px tracking-[.1em] w-full whitespace-nowrap text-center"
      target={target}
      href={link}
    >
      <span className="relative h-full block text-white-8">
        {title}
        {isNew && (
          <span className="w-fit absolute right-0 bottom-[100%] text-[8px] rounded bg-[#7f194f] text-white h-[12px] max-w-[99%] px-4px z-20">
            New
          </span>
        )}
      </span>
    </a>
  );
}

export default NavBannerLink;