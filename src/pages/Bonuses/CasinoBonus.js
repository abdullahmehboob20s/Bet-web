import ClaimBonusCard from "components/ClaimBonusCard";
import React from "react";

function CasinoBonus() {
  return (
    <div className="container-wrapper">
      <div className="px-2 mb-4">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-5px">
            <p className="text-xs text-white-5 font-medium">Total bonus</p>
            <p className="text-xs text-white-5 font-medium">
              Withdrawable funds
            </p>
          </div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs text-oc-2 font-medium">0.00 $</p>
            <p className="text-xs text-oc-1 font-medium">0.00 $</p>
          </div>
          <div className="w-full h-[6px] rounded bg-oc-1"></div>
        </div>

        <div className="py-2 flex items-center justify-between border-b-1px border-t-1px border-white-2">
          <p className="text-xs text-white-4 font-medium">Total balance</p>
          <p className="text-base text-white font-medium">0.00 $</p>
        </div>
      </div>

      <ClaimBonusCard />
    </div>
  );
}

export default CasinoBonus;
