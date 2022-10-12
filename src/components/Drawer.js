import React from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Drawer({ children, title }) {
  const navigate = useNavigate();

  return (
    <div className="absolute bottom-0 left-0 grid grid-rows-[auto_1fr] overflow-hidden bg-b h-[93%] w-full">
      <div className="h-[44px] flex items-center justify-between px-4 border-b-1px border-b-white-2">
        <h1 className="text-base font-normal text-white">{title}</h1>

        <button className="flex text-2xl" onClick={() => navigate(-1)}>
          <IoClose className="fill-white-6" />
        </button>
      </div>

      <div className="overflow-y-auto">{children}</div>
    </div>
  );
}

export default Drawer;
