import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from "react-router-dom";

function BonusJourneyNavbar() {
  return (
    <div className="bg-b z-10">
      <div className="container-wrapper h-mobile-header-navigation-height">
        <Link to="/profile" className="flex items-center space-x-2 h-full">
          <IoIosArrowDropleftCircle className="fill-white-8 text-xl" />
          <p className="text-sm text-white leading-1">BONUS JOURNEY</p>
        </Link>
      </div>
    </div>
  );
}

export default BonusJourneyNavbar;
