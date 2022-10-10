import SportCard from "components/SportCard";
import React from "react";
import { FaTableTennis, FaVolleyballBall } from "react-icons/fa";
import { IoIosTennisball, IoMdBasketball } from "react-icons/io";
import { IoFootball } from "react-icons/io5";

function SportsCardList() {
  return (
    <div>
      <div className="container-wrapper flex overflow-x-scroll hide-scrollbar space-x-2">
        <SportCard
          id="7"
          color="#109121"
          title="Football"
          Icon={(props) => <IoFootball className="text-4xl" {...props} />}
        />
        <SportCard
          id="4"
          color="#fca601"
          title="Basketball"
          Icon={(props) => <IoMdBasketball className="text-4xl" {...props} />}
        />
        <SportCard
          id="12"
          title="Tennis"
          color="#a19e3e"
          Icon={(props) => <IoIosTennisball className="text-4xl" {...props} />}
        />
        <SportCard
          id="14"
          title="Table Tenis"
          color="#839d24"
          Icon={(props) => <FaTableTennis className="text-2xl" {...props} />}
        />
        <SportCard
          id="8"
          title="Volleyball"
          color="#dac179"
          Icon={(props) => <FaVolleyballBall className="text-3xl" {...props} />}
        />
      </div>
    </div>
  );
}

export default SportsCardList;
