import React from "react";
import AttackStats from "./AttackStats";

function AttackStatsCards() {
  return (
    <div className="bg-white-05 rounded p-2 space-y-2">
      <div className="grid grid-cols-2 gap-4">
        <AttackStats black="80%" white="20%" />
        <AttackStats black="60%" white="40%" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <AttackStats />
        <AttackStats />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <AttackStats black="0%" white="100%" />
        <AttackStats />
      </div>
    </div>
  );
}

export default AttackStatsCards;
