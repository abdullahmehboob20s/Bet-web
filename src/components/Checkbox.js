import React from "react";

function Checkbox(props) {
  return (
    <div className="checkbox flex items-center space-x-3">
      <input
        type={"checkbox"}
        name={props.name}
        id={props.id}
        className="w-4 h-4 rounded bg-white-2 checked:bg-hero"
      />
      {props.title && (
        <label
          htmlFor={props.id}
          className="text-sm text-white-7 cursor-pointer"
        >
          {props.title}
        </label>
      )}
    </div>
  );
}

export default Checkbox;
