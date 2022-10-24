import React from "react";
import { BsSdCardFill } from "react-icons/bs";

function GameEventsTimeLine() {
  return (
    <div className="visuals h-[70px] px-7px rounded">
      <div className="flex items-center relative h-full">
        <ul class="time-line-separators-bc w-full h-[30px] z-10 flex items-center justify-between relative">
          <li data-time="0">
            <span className="min-w-[14px] h-[12px] bg-white-6 absolute top-[-16px] left-1/2 -translate-x-1/2 flex items-center justify-center text-[6px] rounded text-black leading-1">
              0
            </span>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li class="bc-i-half-time">
            <span className="min-w-[14px] h-[12px] bg-white-6 absolute top-[-16px] left-1/2 -translate-x-1/2 flex items-center justify-center text-[6px] px-1 rounded text-black leading-1">
              MT
            </span>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li data-time="90">
            <li class="bc-i-half-time">
              <span className="min-w-[14px] h-[12px] bg-white-6 absolute top-[-16px] left-1/2 -translate-x-1/2 flex items-center justify-center text-[6px] px-1 rounded text-black leading-1">
                90
              </span>
            </li>
          </li>
        </ul>

        <div class="time-line-match-bc" style={{ width: "7%" }}></div>

        <ul class="time-line-icons-bc">
          <BsSdCardFill
            className="absolute fill-oc-2"
            style={{ fontSize: "10px", left: "1.83333%", bottom: "-28px" }}
          />
        </ul>
      </div>
    </div>
  );
}

export default GameEventsTimeLine;
