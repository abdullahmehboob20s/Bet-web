import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleStakeModalVisibility } from "redux/stakeModalVisibilityState";
import { store } from "redux/store";
import UpAndDownCard from "./UpAndDownCard";

const Desc = ({ desc, active }) => {
  if (desc)
    return (
      <p
        className={`text-xs flex-1 leading-1 transition-all duration-300 text-left ${
          active ? "text-white" : "text-white-7"
        }`}
      >
        {desc}
      </p>
    );
};

function MatchStatCard({ title, desc, isUp, isDown, id }) {
  const [active, setActive] = useState(false);
  const { itemId } = useSelector((state) => state.stakeModalVisibilityState);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        setActive((val) => !val);
        dispatch(toogleStakeModalVisibility({ visibility: true, id: id }));
      }}
    >
      <UpAndDownCard
        className="h-[40px] px-1 space-x-1 transition-all duration-300"
        title={title}
        isUp={isUp && isUp}
        isDown={isDown && isDown}
        Component={() => <Desc desc={desc} active={active} />}
        bg={active ? "var(--hero)" : "rgba(255,255,255,.2)"}
        titleClassName={`transition-all duration-300 ${
          active ? "text-white" : "text-oc-2"
        }`}
      />
    </button>
  );
}

export default MatchStatCard;
