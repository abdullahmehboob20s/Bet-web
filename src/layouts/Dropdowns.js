import SelectBox from "components/SelectBox";
import React from "react";

function Dropdowns() {
  return (
    <div>
      <div className="container grid grid-cols-2 gap-2">
        <SelectBox />
        <SelectBox />
      </div>
    </div>
  );
}

export default Dropdowns;
