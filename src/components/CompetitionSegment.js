import React from "react";
import { BsBarChartFill, BsFillCameraVideoFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import CardBottomBar from "./CardBottomBar";
import UpAndDownCard from "./UpAndDownCard";

const TitleBar = ({ title, number }) => {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center space-x-2">
      <p className="text-xs flex-1 text-white ellipsis">{title}</p>
      <p className="text-xs text-oc-2 ellipsis">{number}</p>
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
    <Link to="/match" className="block rounded overflow-hidden cursor-pointer">
      <div className="flex h-[52px] space-x-1px mb-1px">
        <div className="flex-1 px-5px bg-white-1 flex flex-col justify-center space-y-2px">
          <TitleBar title="Republic of Ireland U19 (Wom)" number="0" />
          <TitleBar title="France U19 (Won)" number="1" />
        </div>
        <div className="h-full flex space-x-1px">
          {twoColumns ? (
            <>
              <span className="w-[90px]">
                <UpAndDownCard isUp={true} title="3.47" />
              </span>
              <span className="w-[90px]">
                <UpAndDownCard title="1.13" isDown={true} />
              </span>
            </>
          ) : (
            <>
              <span className="w-[60px]">
                <UpAndDownCard isUp={true} title="3.47" />
              </span>
              <span className="w-[60px]">
                <UpAndDownCard title="1.13" isDown={true} />
              </span>
              <span className="w-[60px]">
                <UpAndDownCard />
              </span>
            </>
          )}
        </div>
      </div>

      <CardBottomBar
        isVideo={isVideo}
        isChart={isChart}
        StatsNumber={StatsNumber}
      />
    </Link>
  );
}

export default CompetitionSegment;
