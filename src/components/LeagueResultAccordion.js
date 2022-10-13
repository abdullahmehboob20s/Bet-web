import React from "react";
import { BsShieldFill } from "react-icons/bs";
import CompetitionCard from "./CompetitionCard";

const LeagueIcon = ({ img }) => {
  return (
    <span className="w-[36px]">
      {img ? (
        <img src={img} className="w-[18px]" alt="" />
      ) : (
        <BsShieldFill className="fill-white-2 text-lg" />
      )}
    </span>
  );
};

function LeagueResultAccordion({ children, title, img }) {
  return (
    <CompetitionCard
      open={false}
      title={title}
      className="bg-white-05"
      accordionButtonClassName="container-wrapper h-[34px]"
      ButtonLeftComponent={() => <LeagueIcon img={img && img} />}
    >
      <div className="container-wrapper pb-2">{children}</div>
    </CompetitionCard>
  );
}

export default LeagueResultAccordion;
