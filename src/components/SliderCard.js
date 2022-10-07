import React from "react";
import { AiOutlineInfoCircle, AiOutlineStar } from "react-icons/ai";

function SliderCard() {
  return (
    <div className="min-w-[150px] slider-card rounded overflow-hidden group cursor-pointer">
      <img
        src="images/casino-img.gif"
        className="slider-img transition-all duration-[.25s] group-hover:blur-[4px] z-10 fix-lag"
        alt=""
      />

      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)] z-20 transition-all duration-[.3s] opacity-0 group-hover:opacity-100"></div>

      <p className="absolute top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xs font-medium w-full text-white z-50 transition-all duration-[.3s] opacity-0 group-hover:opacity-100 delay-[.1s] group-hover:delay-[.2s]">
        Daimond Flash
      </p>

      <div className="absolute z-30 top-2 left-0 w-full flex items-center justify-between px-3 space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-[.3s] delay-[.1s] group-hover:delay-[.2s]">
        <AiOutlineStar />
        <AiOutlineInfoCircle />
      </div>

      <div className="absolute z-30 bottom-2 left-0 w-full flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-[.3s] delay-[.1s] group-hover:delay-[.2s]">
        <button className="h-6 px-2 rounded bg-oc-1 flex items-center justify-center w-fit hover:bg-oc-1-hover text-xs uppercase transition-all duration-[.2s] -translate-y-2 group-hover:translate-y-0 delay-[0s] group-hover:delay-[.2s]">
          Play
        </button>
        <button className="h-6 px-2 border-1px border-white-7 rounded bg-transparent flex items-center justify-center w-fit text-xs uppercase transition-all duration-[.2s] translate-y-2 group-hover:translate-y-0 delay-[0s] group-hover:delay-[.2s]">
          Demo
        </button>
      </div>
    </div>
  );
}

export default SliderCard;
