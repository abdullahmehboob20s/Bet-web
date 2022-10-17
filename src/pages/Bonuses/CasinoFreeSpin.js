import TabButton from "components/TabButton";
import React from "react";

function CasinoFreeSpin() {
  return (
    <div className="container-wrapper">
      <div className="flex h-[34px] rounded overflow-hidden space-x-1px mb-10px">
        <TabButton title="New" active={true} />
        <TabButton title="Activated" />
      </div>

      <p className="text-13px text-white-7 py-5 text-center">
        There are no bonuses for selected type
      </p>
    </div>
  );
}

export default CasinoFreeSpin;
