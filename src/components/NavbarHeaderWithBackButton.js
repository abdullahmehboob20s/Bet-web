import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import PageLink from "./PageLink";

function NavbarHeaderWithBackButton({
  pageName,
  linksdata,
  backTo = "/profile",
  TopBarRightComponent,
}) {
  return (
    <div className="bg-b z-10">
      <div className="container-wrapper h-mobile-header-navigation-height flex items-center justify-between">
        <Link to={backTo} className="flex items-center space-x-2 h-full">
          <IoIosArrowDropleftCircle className="fill-white-8 text-xl" />
          <p className="text-sm text-white leading-1">{pageName}</p>
        </Link>

        {TopBarRightComponent && <TopBarRightComponent />}
      </div>
      {linksdata && (
        <div className="flex items-center overflow-x-scroll overflow-y-visible relative z-50 hide-scrollbar h-mobile-header-navigation-height">
          {linksdata.map((item, index) => (
            <PageLink
              count={item.count === 0 ? null : item.count}
              key={index}
              title={item.title}
              link={item.absoluteLink}
              target={item.target}
              bg="var(--b)"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NavbarHeaderWithBackButton;
