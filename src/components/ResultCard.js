import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const TeamNameAndWin = ({ name, winCount }) => {
  return (
    <div className="flex items-center justify-between overflow-hidden">
      <p className="text-11px text-white-9 ellipsis">{name}</p>
      <p className="text-oc-2 font-medium text-xs">{winCount}</p>
    </div>
  );
};

function ResultCard({
  name1 = "Corinthians SP",
  name2 = "Regatas Flamengo RJ",
  BottomBar,
  bg = "rgba(255,255,255,.1)",
}) {
  return (
    <div className="rounded overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="py-10px px-2 space-y-1 border-b-1px border-b-b">
        <TeamNameAndWin name={name1} winCount={1} />
        <TeamNameAndWin name={name2} winCount={0} />

        <p className="text-10px text-white-5">0:0 (0:0)</p>
      </div>

      {BottomBar ? (
        <BottomBar />
      ) : (
        <div className="h-[24px] flex items-center justify-between px-2">
          <div className="flex items-center space-x-1">
            <AiFillClockCircle className="fill-white-5 text-base" />
            <p className="text-10px flex items-center space-x-2">
              <span className="text-white-5 border-r-1px border-r-b pr-2">
                13.10.2022
              </span>
              <span className="text-white-5">05:45</span>
            </p>
          </div>
          <div>
            <button className="flex items-center space-x-1">
              <span className="text-xs text-white-7 uppercase">View</span>
              <IoIosArrowForward className="fill-white-7 text-sm" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultCard;
