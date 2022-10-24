import React from "react";

function AttackStats({ black, white }) {
  return (
    <div>
      <p className="text-10px mb-1 text-white-7 text-center">
        Dangerous Attack
      </p>

      <div className="flex items-center space-x-1">
        <p className="text-[8px] w-5 font-bold text-white-6 text-center">6</p>
        <div className="flex flex-1 h-1 overflow-hidden rounded bg-white-5">
          <div className="h-full bg-black" style={{ width: black }}></div>
          <div className="h-full bg-white" style={{ width: white }}></div>
        </div>
        <p className="text-[8px] w-5 font-bold text-white-6 text-center">2</p>
      </div>
    </div>
  );
}

export default AttackStats;
