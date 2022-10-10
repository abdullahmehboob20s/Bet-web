import navbarLinksData from "assets/data/navbar-links-data";
import React from "react";
import NavBannerLink from "./NavBannerLink";

function NavbarLinks() {
  return (
    <div className="flex items-center overflow-x-scroll hide-scrollbar h-full">
      {navbarLinksData.map((item, index) => (
        <NavBannerLink
          key={index}
          title={item.title}
          isNew={item.isNew}
          link={item.link}
          target={item.target}
        />
      ))}
    </div>
  );
}

export default NavbarLinks;
