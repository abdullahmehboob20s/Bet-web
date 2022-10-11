import React from "react";
import { FaTrophy } from "react-icons/fa";
import SelectBox from "./SelectBox";

const options = [
  { title: "Select Tournaments", value: "" },
  { title: "Русский", value: "" },
  { title: "ქართული", value: "" },
  { title: "Français", value: "" },
  { title: "Հայերեն", value: "" },
];

function TournamentSelector() {
  return (
    <SelectBox
      title="TOURNAMENTS"
      options={options}
      showDropdownIcon={false}
      bg="bg-blue-to-purple"
      titleClassName="absolute top-[3px] text-[10px] text-white-5 pl-[38px]"
      selectBoxClassName="pl-[38px] pb-0 pt-[18px] text-white-9 text-sm"
      wrapperClassName="h-[40px]"
    >
      <FaTrophy className="absolute top-1/2 -translate-y-1/2 left-3 text-base fill-white-8" />
    </SelectBox>
  );
}

export default TournamentSelector;
