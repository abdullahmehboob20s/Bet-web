import FilterButton from "components/FilterButton";
import React from "react";
import { FaVideo } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { AiFillCloud } from "react-icons/ai";
import SearchBar from "components/SearchBar";

function FilterBar() {
  return (
    <div className="container-wrapper flex items-center justify-between relative">
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
  );
}

export default FilterBar;
