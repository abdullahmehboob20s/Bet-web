import React from "react";
import { BsSdCardFill } from "react-icons/bs";
import { FaTshirt } from "react-icons/fa";
import CompetitionCard from "./CompetitionCard";

const Card = () => {
  return (
    <div className="px-10px flex items-center space-x-3 h-[32px] min-h-[32px] bg-white-1">
      <div className="divider">
        <FaTshirt className="fill-[rgb(255,0,0)] text-xs divider-item" />
        <span className="divider-item">
          <BsSdCardFill className="text-xs fill-oc-2" />
        </span>
      </div>
      <p className="text-10px text-white-7 ellipsis">
        Penalty 9' Henan Songshan Longmen FC
      </p>
    </div>
  );
};

function GameEventsDropdown() {
  return (
    <div>
      <CompetitionCard
        title="Game events"
        titleFontSize="text-xs"
        accordionButtonClassName="px-10px h-[32px] bg-[rgba(255,255,255,.15)]"
        className="bg-b rounded overflow-hidden"
        childrenWrapperClassName="mt-[1px]"
      >
        <div className="space-y-1px max-h-[164px] overflow-y-auto">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </CompetitionCard>
    </div>
  );
}

export default GameEventsDropdown;
