import React from "react";
import { IoIosArrowBack } from "react-icons/io";

function ProfileCardsHeader({ pageName, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-white-05 h-[42px] rounded-tl rounded-tr px-2 flex items-center space-x-2"
    >
      <IoIosArrowBack className="fill-white-5 text-xl" />
      <p className="text-base text-white-9">{pageName}</p>
    </button>
  );
}

export default ProfileCardsHeader;
