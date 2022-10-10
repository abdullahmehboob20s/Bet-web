import FilterButton from "components/FilterButton";
import React from "react";
import { FaTrophy, FaVideo } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { AiFillCloud } from "react-icons/ai";
import SearchBar from "components/SearchBar";
import SelectBox from "components/SelectBox";

const options = [
  { title: "Select Tournaments", value: "" },
  { title: "Русский", value: "" },
  { title: "ქართული", value: "" },
  { title: "Français", value: "" },
  { title: "Հայերեն", value: "" },
];

function FilterBar() {
  return (
    <div>
      <div className="container-wrapper flex items-center justify-between relative mb-10px">
        <div className="flex items-center space-x-10px">
          <FilterButton
            Icon={({ className }) => (
              <FaVideo className={`text-sm ${className}`} />
            )}
          />
          <FilterButton
            Icon={({ className }) => (
              <BiGlobe className={`text-base ${className}`} />
            )}
          />
          <FilterButton
            Icon={({ className }) => (
              <AiFillCloud className={`text-base ${className}`} />
            )}
          />
        </div>

        <SearchBar />
      </div>

      <div className="container-wrapper">
        <SelectBox
          title="TOURNAMENTS"
          options={options}
          showDropdownIcon={false}
          bg="bg-blue-to-purple"
          height="h-[40px]"
          paddingTop="pt-4"
          titleClassName="absolute top-[3px] text-[10px] text-white-5"
          fromLeft="pl-[38px]"
        >
          <FaTrophy className="absolute top-1/2 -translate-y-1/2 left-3 text-base fill-white-8" />
        </SelectBox>
      </div>
    </div>
  );
}

export default FilterBar;
