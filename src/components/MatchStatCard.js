import React from "react";
import UpAndDownCard from "./UpAndDownCard";

const Desc = ({ desc }) => {
  if (desc)
    return <p className="text-xs flex-1 text-white-7 leading-1">{desc}</p>;
};

function MatchStatCard({ title, desc, isUp, isDown }) {
  return (
    <UpAndDownCard
      className="h-[40px] px-1 space-x-1"
      title={title}
      isUp={isUp && isUp}
      isDown={isDown && isDown}
      Component={() => <Desc desc={desc} />}
    />
  );
}

export default MatchStatCard;
