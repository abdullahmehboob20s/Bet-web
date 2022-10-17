import CompetitionCard from "components/CompetitionCard";
import React from "react";
import { AiTwotoneFilter } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";

const FilterIcon = () => {
  return <AiTwotoneFilter className="text-3xl mr-2" />;
};

function Filter({ children, subtitle, title = "Filter" }) {
  return (
    <div className="container-wrapper">
      <CompetitionCard
        open={false}
        subtitle={subtitle}
        title={title}
        className="bg-white-2 rounded overflow-hidden"
        accordionButtonClassName="h-[44px] px-10px"
        ButtonLeftComponent={FilterIcon}
        subtitleClassName="text-white-6"
      >
        {children}
      </CompetitionCard>
    </div>
  );
}

export default Filter;
