import SelectBox from "components/SelectBox";
import React from "react";

const options = [
  { title: "WINNER", value: "" },
  { title: "HANDICAP", value: "" },
  { title: "TOTALS", value: "" },
];

function WinnerDisplayer() {
  return (
    <div className="bg-white-1">
      <div className="container-wrapper flex items-center h-[28px]">
        <div className="flex-1 pr-[35px]">
          <SelectBox
            bg="bg-white-05"
            options={options}
            wrapperClassName="h-auto w-full"
            selectBoxClassName="pl-10px pb-0 pt-[2px] text-white-9 text-xs flex flex-col"
            downIconClassName="top-1/2 -translate-y-1/2 right-3 text-base"
          />
        </div>
        <div className="border-l-1px border-l-b w-[179px] flex items-center">
          <div className="flex-1">
            <p className="text-11px text-center text-white leading-1">W1</p>
          </div>
          <div className="flex-1">
            <p className="text-11px text-center text-white leading-1">X</p>
          </div>
          <div className="flex-1">
            <p className="text-11px text-center text-white leading-1">W2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WinnerDisplayer;
