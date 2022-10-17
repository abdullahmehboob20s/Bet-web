import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";
import CustomHeader from "./CustomHeader";
import SelectBox from "./SelectBox";

function CustomDatePicker({ title = "Range", value = new Date() }) {
  const [startDate, setStartDate] = useState(value);

  return (
    <SelectBox
      title={title}
      overflowHidden={false}
      showDropdownIcon={false}
      Component={({ className }) => (
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showMonthDropdown
          showYearDropdown
          portalId="root-portal"
          renderCustomHeader={(props) => <CustomHeader {...props} />}
          className={`z-[10000] relative ${className}`}
        />
      )}
    >
      <AiOutlineCalendar className="absolute vertical-position-center right-4 pointer-events-none text-2xl fill-white-8" />
    </SelectBox>
  );
}

export default CustomDatePicker;
