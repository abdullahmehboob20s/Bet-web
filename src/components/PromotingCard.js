import React from "react";

function PromotingCard({ Icon, title, desc }) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <div className="md:h-[60px] xl:h-[90px] mb-2 md:mb-0">
        {Icon && <Icon />}
      </div>

      <h1 className="text-2xl md:text-3xl xl:text-4xl text-black font-bold opacity-80 mb-2">
        {title}
      </h1>
      <p className="text-xs md:text-sm font-medium text-black opacity-90">
        {desc}
      </p>
    </div>
  );
}

export default PromotingCard;
