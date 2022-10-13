import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";

function User() {
  return (
    <div className="container-wrapper">
      <div className="px-3 flex items-center justify-between">
        <div className="flex items-center justify-between space-x-2">
          <HiUserCircle className="text-4xl fill-white-6" />

          <p className="text-11px flex items-center space-x-2">
            <span className="text-white-5 leading-1">889309126</span>
            <button className="flex text-xs">
              <MdContentCopy className="fill-white-5" />
            </button>
          </p>
        </div>

        <button className="flex">
          <IoIosArrowForward className="text-xl fill-white-5" />
        </button>
      </div>
    </div>
  );
}

export default User;
