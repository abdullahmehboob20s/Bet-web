import React from "react";

const UpAndDownCard = ({
  isUp = false,
  isDown = false,
  title = "-",
  Component,
  className,
}) => {
  return (
    <div
      className={`${className} w-full bg-white-2 h-full flex items-center justify-center relative`}
      dir={"ltr"}
    >
      {isUp && <i className="market-arrow-up-down-bc is-up"></i>}
      {isDown && <i className="market-arrow-up-down-bc is-down"></i>}

      {Component && <Component />}

      <span className="text-oc-2 text-13px transition-all duration-[.25s]">
        {title}
      </span>
    </div>
  );
};

export default UpAndDownCard;
