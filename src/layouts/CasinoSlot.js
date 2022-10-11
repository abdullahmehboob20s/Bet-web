import React from "react";
import New from "./CasinoPage/New";
import PopularGames from "./CasinoPage/PopularGames";
import SlotsForBonuses from "./CasinoPage/SlotsForBonuses";

function CasinoSlot() {
  return (
    <div className="space-y-10">
      <div>
        <SlotsForBonuses />
      </div>
      <div>
        <PopularGames />
      </div>
      <div>
        <New />
      </div>
    </div>
  );
}

export default CasinoSlot;
