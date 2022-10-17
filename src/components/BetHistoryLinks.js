import betHistoryLinks from "assets/data/betHistoryLinks";
import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import PageLink from "./PageLink";

function BetHistoryLinks() {
  return (
    <div className="bg-b">
      <div className="container-wrapper h-mobile-header-navigation-height">
        <Link to="/profile" className="flex items-center space-x-2 h-full">
          <IoIosArrowDropleftCircle className="fill-white-8 text-xl" />
          <p className="text-sm text-white leading-1">BET HISTORY</p>
        </Link>
      </div>
      <div className="flex items-center overflow-x-scroll hide-scrollbar h-mobile-header-navigation-height">
        {betHistoryLinks.map((item, index) => (
          <PageLink
            key={index}
            title={item.title}
            link={item.link}
            target={item.target}
            bg="var(--b)"
          />
        ))}
      </div>
    </div>
  );
}

export default BetHistoryLinks;
