import React from "react";

function Checkbox(props) {
  const { className = "flex items-center space-x-3", inputClassName } = props;
  return (
    <div className={`checkbox ${className}`}>
      <input
        type={"checkbox"}
        name={props.name}
        id={props.id}
        className={`min-w-[16px] h-4 rounded bg-white-2 checked:bg-hero ${inputClassName}`}
      />
      {props.title && (
        <label
          htmlFor={props.id}
          className="text-sm text-white-7 cursor-pointer"
        >
          {props.title && props.title}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
