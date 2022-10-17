import Switch from "components/Switch";
import React from "react";

function Authentication() {
  return (
    <div>
      <div className="container-wrapper">
        <div className="flex items-center justify-between px-3">
          <p className="text-base text-white">
            Activate two-factor authentication
          </p>
          <Switch />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
