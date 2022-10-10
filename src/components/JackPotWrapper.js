import React from "react";

function JackPotWrapper({ children }) {
  return (
    <div className="container-wrapper">
      <div className="py-18px rounded jackpot-banner z-10 relative">
        {children}
      </div>
    </div>
  );
}

export default JackPotWrapper;
