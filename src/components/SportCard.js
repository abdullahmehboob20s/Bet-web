import React, { useState } from "react";

function SportCard({ id, title, Icon, color = "rgba(255,255,255,.1)" }) {
  const [active, setActive] = useState(false);

  const toggle = () => setActive((val) => !val);

  return (
    <button
      onClick={toggle}
      className={`outline-none p-5px rounded text-white-5 relative flex flex-col min-w-[80px] h-[60px] text-center items-center justify-center`}
      style={{ backgroundColor: active ? color : "rgba(255,255,255,.1)" }}
    >
      <span className="h-[38px] flex items-center justify-center">
        {Icon && <Icon style={{ fill: active ? "white" : color }} />}
      </span>
      <span
        className={`text-10px block ${active ? "text-white" : "text-white-5"}`}
      >
        {title}
      </span>

      <span className="text-[9px] text-white absolute top-3px right-[16%]">
        {id}
      </span>
    </button>
  );
}

export default SportCard;
