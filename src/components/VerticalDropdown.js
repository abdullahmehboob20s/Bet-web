import OutsideClickDetector from "hooks/OutsideClickDetector";
import useDelayUnmount from "hooks/useDelayUnmount";
import React, { useState } from "react";
import { AiTwotoneSetting, AiTwotoneStar } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiJourney } from "react-icons/gi";
import { IoIosPaper, IoMdPerson } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";

const IconButton = ({ children }) => {
  return (
    <button className="h-[56px] text-white-5 bg-white-2 flex items-center justify-center transition-all duration-[.24s] hover:bg-white-1 w-full">
      {children}
    </button>
  );
};

function VerticalDropdown() {
  const [active, setIsActive] = useState(false);
  const shouldDropdownRender = useDelayUnmount(active, 300);
  const dropdownRef = OutsideClickDetector(() => setIsActive(false));

  return (
    <div className="relative">
      <button
        className={`w-7 h-7 relative z-[100] rounded-full flex items-center transition-all duration-[.24s] justify-center text-xl ${
          active ? "bg-white-8" : "bg-white-1"
        }`}
        onClick={() => setIsActive((val) => !val)}
      >
        <BsThreeDotsVertical
          className={`transition-all duration-[.24s] ${
            active ? "rotate-90 fill-b" : "rotate-0 fill-white-8"
          }`}
        />
      </button>

      {shouldDropdownRender && (
        <div
          ref={dropdownRef}
          className={`w-[54px] h-[51vh] rounded z-50 right-[12px] transition-all duration-[.24s] fixed top-[calc(var(--mobile-header-main-section-height))] -translate-y-4 ${
            active ? "dropdown-fade-in" : "dropdown-fade-out"
          }`}
        >
          {/*  */}
          <div className="absolute top-[-6px] right-[12px] -z-20 w-[12px] h-[12px] bg-white-2 rotate-45"></div>

          {/*  */}
          <div className="overflow-y-auto overflow-x-hidden h-full z-20 bg-header rounded">
            <IconButton>
              <GiJourney className="text-xl fill-white-8" />
            </IconButton>
            <IconButton>
              <IoNotifications className="text-xl fill-white-8" />
            </IconButton>
            <IconButton>
              <AiTwotoneStar className="text-xl fill-white-8" />
            </IconButton>
            <IconButton>
              <AiTwotoneSetting className="text-xl fill-white-8" />
            </IconButton>
            <IconButton>
              <IoMdPerson className="text-xl fill-white-8" />
            </IconButton>
            <IconButton>
              <IoIosPaper className="text-xl fill-white-8" />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default VerticalDropdown;
