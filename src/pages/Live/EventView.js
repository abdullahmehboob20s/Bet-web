import JackpotCard from "components/JackpotCard";
import JackPotWrapper from "components/JackPotWrapper";
import FilterBar from "layouts/EventView/FilterBar";
import React from "react";

function EventView() {
  return (
    <div>
      <div className="mb-4">
        <JackPotWrapper>
          <JackpotCard />
        </JackPotWrapper>
      </div>
      <div className="mb-10px">
        <FilterBar />
      </div>
    </div>
  );
}

export default EventView;
