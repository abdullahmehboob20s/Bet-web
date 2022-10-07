import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function SliderSection({ children, title, moreLink = "/" }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-10px">
        <h1 className="heading">{title}</h1>
        <a
          href={moreLink}
          className="flex items-center space-x-1 text-xs uppercase"
        >
          <span className="text-white-5">More</span>{" "}
          <span className="text-[1.2em]">
            <IoIosArrowForward className="fill-white-5" />
          </span>
        </a>
      </div>

      <div className="games-horiz-scroll gap-3 hide-scrollbar">{children}</div>
    </div>
  );
}

export default SliderSection;
