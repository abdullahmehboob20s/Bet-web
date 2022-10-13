import CompetitionCard from "components/CompetitionCard";
import SelectBox from "components/SelectBox";
import React from "react";
import { AiTwotoneFilter } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "components/CustomDatePicker";

const FilterIcon = () => {
  return <AiTwotoneFilter className="text-3xl mr-2" />;
};

function Filter() {
  return (
    <div className="container-wrapper">
      <CompetitionCard
        open={false}
        title="Filter"
        className="bg-white-2 rounded overflow-hidden"
        accordionButtonClassName="h-[44px] px-10px"
        ButtonLeftComponent={FilterIcon}
      >
        <div className="container-wrapper">
          <div className="border-t-1px border-t-b py-3 space-y-2">
            <div className="flex items-center space-x-2">
              <CustomDatePicker />
              <CustomDatePicker />
            </div>

            <SelectBox
              title="Sports"
              options={[{ title: "Footbal" }, { title: "Cricket" }]}
            />
            <SelectBox
              title="Competition"
              options={[{ title: "All" }, { title: "Cricket" }]}
            />
          </div>
        </div>
      </CompetitionCard>
    </div>
  );
}

export default Filter;
