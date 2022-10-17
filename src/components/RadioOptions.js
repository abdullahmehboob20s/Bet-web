import React from "react";
import RadioButton from "./RadioButton";

const RadioOptions = ({ title, name }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="ellipsis text-xs text-white-7 font-medium">{title}</p>
      <div className="flex items-center space-x-4">
        <RadioButton label="Yes" name={name} />
        <RadioButton label="No" name={name} />
      </div>
    </div>
  );
};

export default RadioOptions;
