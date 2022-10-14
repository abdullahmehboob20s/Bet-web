import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function ProfileCard({
  iconBg,
  title,
  Icon,
  count,
  showArrow = true,
  bg = "bg-white-2",
}) {
  return (
    <button
      className={`w-full flex items-center justify-between px-2 h-[42px] rounded ${bg}`}
    >
      <div className="flex items-center justify-between space-x-2">
        <div
          className="min-w-[30px] h-[30px] rounded text-lg flex items-center justify-center relative user-profile-icon z-20"
          style={{ backgroundColor: iconBg }}
        >
          {Icon && <Icon />}{" "}
        </div>

        <p className="text-white-9 text-sm">{title}</p>
      </div>
      <div className="flex items-center space-x-2">
        {count && (
          <div className="w-4 h-4 rounded-full bg-hero flex items-start justify-center text-10px">
            {count}
          </div>
        )}
        {showArrow && <IoIosArrowForward className="text-xl fill-white-5" />}
      </div>
    </button>
  );
}

export default ProfileCard;
