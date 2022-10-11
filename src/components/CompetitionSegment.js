import React from "react";
import { BsBarChartFill, BsFillCameraVideoFill } from "react-icons/bs";
import { CgMediaLive } from "react-icons/cg";

const TitleBar = ({ title, number }) => {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center space-x-2">
      <p className="text-xs flex-1 text-white ellipsis">{title}</p>
      <p className="text-xs text-oc-2 ellipsis">{number}</p>
    </div>
  );
};

const StatCard = ({ isUp = false, isDown = false, title = "-" }) => {
  return (
    <div
      className="w-full bg-white-2 h-full flex items-center justify-center relative"
      dir={"ltr"}
    >
      {isUp && <i class="market-arrow-up-down-bc is-up"></i>}
      {isDown && <i class="market-arrow-up-down-bc is-down"></i>}

      <span className="text-oc-2 text-13px transition-all duration-[.25s]">
        {title}
      </span>
    </div>
  );
};

function CompetitionSegment({
  isChart = true,
  isVideo = true,
  StatsNumber = "+98",
  twoColumns = false,
}) {
  return (
    <div className="rounded overflow-hidden">
      <div className="flex h-[52px] space-x-1px mb-1px">
        <div className="flex-1 px-5px bg-white-1 flex flex-col justify-center space-y-2px">
          <TitleBar title="Republic of Ireland U19 (Wom)" number="0" />
          <TitleBar title="France U19 (Won)" number="1" />
        </div>
        <div className="h-full flex-1 flex space-x-1px">
          {twoColumns ? (
            <>
              <span className="w-[90px]">
                <StatCard isUp={true} title="3.47" />
              </span>
              <span className="w-[90px]">
                <StatCard title="1.13" isDown={true} />
              </span>
            </>
          ) : (
            <>
              <span className="w-[60px]">
                <StatCard isUp={true} title="3.47" />
              </span>
              <span className="w-[60px]">
                <StatCard title="1.13" isDown={true} />
              </span>
              <span className="w-[60px]">
                <StatCard />
              </span>
            </>
          )}
        </div>
      </div>
      <div className="bg-white-1 h-6 flex items-center justify-between px-5px ">
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
    </div>
  );
}

export default CompetitionSegment;
