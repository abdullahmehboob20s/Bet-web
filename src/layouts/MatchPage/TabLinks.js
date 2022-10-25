import PageLink from "components/PageLink";
import SearchBar from "components/SearchBar";
import React from "react";
import { BiStar } from "react-icons/bi";

function TabLinks() {
  return (
    <div className="pl-[calc(36px)] flex items-center overflow-x-scroll overflow-y-visible relative z-50 hide-scrollbar h-[36px]">
      <SearchBar
        className="z-[100]"
        buttonClassName="bg-white-2"
        directionToLeft={true}
        rounded={false}
      />

      <PageLink
        sticky={false}
        // title={}
        Icon={(props) => (
          <BiStar
            className={`${props.isActive ? "fill-white" : "fill-white-4"}`}
          />
        )}
        link="stared"
        bg="rgba(255,255,255,.1)"
        className="text-lg px-4"
        countClassName="absolute left-[98%] bottom-[60%] text-[8px] text-white-5 z-20"
        inActiveClassName="before:bg-white-09 fill-white-4"
      />
      <PageLink
        sticky={false}
        title="All"
        link=""
        bg="rgba(255,255,255,.1)"
        className="text-xs capitalize px-4"
        countClassName="absolute left-[98%] bottom-[60%] text-[8px] text-white-5 z-20"
        inActiveClassName="before:bg-white-09 text-white-4"
      />
      <PageLink
        sticky={false}
        title="Match"
        link="match"
        bg="rgba(255,255,255,.1)"
        className="text-xs capitalize px-4"
        countClassName="absolute left-[98%] bottom-[60%] text-[8px] text-white-5 z-20"
        inActiveClassName="before:bg-white-09 text-white-4"
        count={7}
      />
      <PageLink
        sticky={false}
        title="Tools"
        link="tools"
        bg="rgba(255,255,255,.1)"
        className="text-xs capitalize px-4"
        countClassName="absolute left-[98%] bottom-[60%] text-[8px] text-white-5 z-20"
        inActiveClassName="before:bg-white-09 text-white-4"
        count={16}
      />
      <PageLink
        sticky={false}
        title="Handicaps"
        link="handicaps"
        bg="rgba(255,255,255,.1)"
        className="text-xs capitalize px-4"
        countClassName="absolute left-[98%] bottom-[60%] text-[8px] text-white-5 z-20"
        inActiveClassName="before:bg-white-09 text-white-4"
        count={9}
      />
    </div>
  );
}

export default TabLinks;
