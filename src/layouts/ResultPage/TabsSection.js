import React from "react";

function TabsSection() {
  return (
    <div className="container-wrapper pt-2">
      <div className="flex h-[34px] rounded overflow-hidden space-x-1px">
        <button className="text-xs bg-white-1 block w-full text-white-5 hover:bg-white-2 hover:text-white transition-all duration-[.24s] h-full">
          Live
        </button>
        <button className="text-xs bg-white-2 block w-full text-white hover:bg-white-2 hover:text-white transition-all duration-[.24s] h-full relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-1px before:bg-hero">
          Finished
        </button>
      </div>
    </div>
  );
}

export default TabsSection;
