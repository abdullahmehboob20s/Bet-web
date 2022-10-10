import SelectBox from "components/SelectBox";
import React from "react";

const options = [
  { title: "English", value: "" },
  { title: "Русский", value: "" },
  { title: "ქართული", value: "" },
  { title: "Français", value: "" },
  { title: "Հայերեն", value: "" },
];

function Dropdowns() {
  return (
    <div>
      <div className="container-wrapper grid grid-cols-2 gap-2">
        <SelectBox options={options} />
        <SelectBox options={options} />
      </div>
    </div>
  );
}

export default Dropdowns;
