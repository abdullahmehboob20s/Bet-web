import React from "react";

function PartnerCard({ img }) {
  return (
    <div className="min-w-[52px] w-[52px] h-[52px] flex items-center justify-center rounded p-5px bg-[rgba(255,255,255,0.1)]">
      <img src={img} className="w-full h-full object-contain" alt="" />
    </div>
  );
}

export default PartnerCard;
