import React from "react";

const UpAndDownCard = ({
  isUp = false,
  isDown = false,
  title = "-",
  Component,
  className,
  bg = "rgba(255,255,255,.2)",
  titleClassName = "text-oc-2",
}) => {
  return (
    <div
      className={`${className} w-full h-full flex items-center justify-center relative`}
      dir={"ltr"}
      style={{ backgroundColor: bg }}
    >
      {isUp && <i className="market-arrow-up-down-bc is-up"></i>}
      {isDown && <i className="market-arrow-up-down-bc is-down"></i>}

      {Component && <Component />}

      <span
        className={`text-13px transition-all duration-[.25s] ${titleClassName}`}
      >
        {title}
      </span>
    </div>
  );
};

export default UpAndDownCard;
