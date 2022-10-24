import React, { useState } from "react";

function FootbalFilterButton({ Icon, stateGetter, stateSetter }) {
  return (
    <button
      onClick={() => stateSetter((val) => !val)}
      className="bg-[rgba(0,0,0,.4)] w-[20%] max-w-[63px] h-[32px] flex items-center justify-center rounded"
    >
      {Icon && (
        <Icon
          className={`fill-[#a6a6a6] ${
            stateGetter && "fill-white"
          } transition-all duration-[.24s]`}
        />
      )}
    </button>
  );
}

export default FootbalFilterButton;
