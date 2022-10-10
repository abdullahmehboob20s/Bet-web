import React, { useState } from "react";

function FilterButton(props) {
  const { Icon } = props;
  const [active, setActive] = useState(false);

  const toggle = () => setActive((val) => !val);

  return (
    <button
      onClick={toggle}
      className={`w-12 border-1px border-white-6 transition-all duration-[.24s] rounded h-[28px] flex items-center justify-center text-white-9 ${
        active ? "bg-white" : "bg-transparent"
      } `}
    >
      {Icon && (
        <Icon
          className={`${
            active ? "fill-[rgba(var(--b-rgb),.9)]" : "fill-white-9"
          } transition-all duration-[.24s]`}
        />
      )}
    </button>
  );
}

export default FilterButton;
