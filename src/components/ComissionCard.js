import React from "react";

function ComissionCard({ title, desc }) {
  return (
    <div className="flex-1 text-center md:text-left">
      <h3 className="text-xl md:text-2xl xl:text-3xl mb-3 text-black opacity-80 font-bold">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-black opacity-90 font-medium">
        {desc}
      </p>
    </div>
  );
}

export default ComissionCard;
