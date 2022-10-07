import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";

function JackpotCard() {
  return (
    <div className="flex flex-col items-center space-y-2px text-center">
      <div className="flex items-center space-x-2 justify-center">
        <p className="text-gold uppercase text-xs">Sportsbook jackpot</p>
        <button className="text-sm text-white opacity-60">
          <AiFillInfoCircle />
        </button>
      </div>
      <p className="text-base">
        20,948.18 <span className="text-[.6em] align-super">$</span>
      </p>
    </div>
  );
}

export default JackpotCard;
