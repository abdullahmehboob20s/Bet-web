import React from "react";
import { BsBarChartFill, BsFillCameraVideoFill } from "react-icons/bs";

function CardBottomBar({
  isVideo,
  isChart,
  StatsNumber,
  bg = "rgba(255,255,255,.1)",
}) {
  return (
    <div
      className="h-6 flex items-center justify-between px-5px"
      style={{ backgroundColor: bg }}
    >
      <div className="flex items-center space-x-2 overflow-hidden flex-[.7]">
        <div className="flex min-w-fit items-center space-x-6px pr-3 border-r-1px border-r-b">
          <img
            src='data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cg fill="%23ff3449" fill-rule="evenodd" clip-rule="evenodd"%3E%3Cpath d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"%2F%3E%3Cpath d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm0-2a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"%2F%3E%3Cpath d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11Zm0-2a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E'
            className="w-[14px]"
            alt=""
          />
          <p className="text-11px text-white-7 leading-1">2nd-half</p>
        </div>
        <p className="text-11px leading-1 text-white-7 ellipsis">
          1 : 3, (1:2), (0:1) 90+1`
        </p>
      </div>
      <div className="flex items-center stats_wrapper space-x-2">
        {/* <div></div> */}
        {isVideo && (
          <span className="flex">
            <BsFillCameraVideoFill className="fill-white-7 text-sm" />
          </span>
        )}
        {isChart && (
          <span className="flex">
            <BsBarChartFill className="fill-white-7 text-sm" />
          </span>
        )}
        {StatsNumber && <p className="text-xs text-white">{StatsNumber}</p>}
      </div>
    </div>
  );
}

export default CardBottomBar;
