import React from "react";

const BG = "bg-[rgba(255,255,255,0.15)]";

function Selector() {
  return (
    <label
      className={`cursor-pointer border-none outline-none bg-transparent ${BG}`}
    >
      <select className="bg-transparent w-full outline-none text-white-9">
        <option className="bg-b">One</option>
        <option className="bg-b">Two</option>
      </select>
    </label>
  );
}

export default Selector;
