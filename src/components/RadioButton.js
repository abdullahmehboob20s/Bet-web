import React from "react";

function RadioButton({ label, name, checked, className }) {
  return (
    <label
      class={`${className} radio-container relative cursor-pointer flex items-center`}
    >
      <input type="radio" name={name} checked={checked} />
      <span className="radio-checkmark"></span>
      <span className="text-xs font-bold text-white ml-2">{label}</span>
    </label>
  );
}

export default RadioButton;
