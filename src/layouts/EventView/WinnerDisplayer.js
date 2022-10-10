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
            height="h-auto w-full"
            paddingTop="pt-[2px]"
            fromLeft="pl-10px"
            options={options}
            bg="bg-white-05"
            fontSize="text-xs"
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
