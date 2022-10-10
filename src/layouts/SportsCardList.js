import SportCard from "components/SportCard";
import React, { useState } from "react";
import { FaTableTennis, FaVolleyballBall } from "react-icons/fa";
import { IoIosTennisball, IoMdBasketball } from "react-icons/io";
import { IoFootball } from "react-icons/io5";

function SportsCardList() {
  const [data, setData] = useState([
    {
      id: "7",
      color: "#109121",
      title: "Football",
      Icon: IoFootball,
      iconSize: "text-4xl",
      isSelected: false,
    },
    {
      id: "4",
      color: "#fca601",
      title: "Basketball",
      Icon: IoMdBasketball,
      iconSize: "text-4xl",
      isSelected: false,
    },
    {
      id: "12",
      title: "Tennis",
      color: "#a19e3e",
      Icon: IoIosTennisball,
      iconSize: "text-4xl",
      isSelected: false,
    },
    {
      id: "14",
      title: "Table Tenis",
      color: "#839d24",
      Icon: FaTableTennis,
      iconSize: "text-2xl",
      isSelected: false,
    },
    {
      id: "8",
      title: "Volleyball",
      color: "#dac179",
      Icon: FaVolleyballBall,
      iconSize: "text-2xl",
      isSelected: false,
    },
  ]);

  const changeSelected = (id) => {
    const newData = data.map((item) => {
      if (item.id == id) {
        return { ...item, isSelected: true };
      } else {
        return { ...item, isSelected: false };
      }
    });

    setData(newData);
  };

  return (
    <div>
      <div className="container-wrapper flex overflow-x-scroll hide-scrollbar space-x-2">
        {data.map((item, index) => (
          <SportCard
            id={item.id}
            color={item.color}
            title={item.title}
            onClick={changeSelected}
            isSelected={item.isSelected}
            Icon={(props) => <item.Icon className={item.iconSize} {...props} />}
          />
        ))}
      </div>
    </div>
  );
}

export default SportsCardList;
