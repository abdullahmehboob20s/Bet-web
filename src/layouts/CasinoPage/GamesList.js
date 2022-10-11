import SportCard from "components/SportCard";
import React, { useState } from "react";
import { BsFillGiftFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import { AiFillDollarCircle } from "react-icons/ai";

function GamesList() {
  const [data, setData] = useState([
    {
      id: "1",
      title: "All Games",
      isSelected: false,
      Icon: BsFillGrid3X3GapFill,
      iconSize: "text-2xl",
    },
    {
      id: "2",
      title: "SLOTS FOR BONUSES",
      isSelected: false,
      Icon: BsFillGiftFill,
      iconSize: "text-2xl",
    },
    {
      id: "3",
      title: "Popular Games",
      isSelected: false,
      Icon: FaTrophy,
      iconSize: "text-2xl",
    },
    {
      id: "4",
      title: "NEW",
      isSelected: false,
      Icon: GiElectric,
      iconSize: "text-3xl",
    },
    {
      id: "5",
      title: "Buy Bonus",
      isSelected: false,
      Icon: AiFillDollarCircle,
      iconSize: "text-2xl",
    },
  ]);

  const changeSelected = (id) => {
    const newData = data.map((item) => {
      if (item.id == id) {
        return { ...item, isSelected: item.isSelected ? false : true };
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
            key={index}
            id={item.id}
            showId={false}
            onClick={changeSelected}
            color="rgba(255,255,255,.5)"
            selectedBgColor="#A71F67"
            title={item.title}
            isSelected={item.isSelected}
            Icon={(props) => <item.Icon className={item.iconSize} {...props} />}
          />
        ))}
      </div>
    </div>
  );
}

export default GamesList;
