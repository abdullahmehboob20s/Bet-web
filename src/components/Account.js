import React from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

function Account() {
  return (
    <div className="container-wrapper">
      <div className="pb-4 border-b-1px border-b-white-4">
        <button className="px-3 flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <BsFillShieldLockFill className="fill-[#ff3449] text-sm" />
            <p className="text-white-9 text-sm">Account not verified</p>
          </div>

          <IoIosArrowForward className="text-xl fill-white-5" />
        </button>
      </div>
    </div>
  );
}

export default Account;
