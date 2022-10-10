import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useEffect, useRef, useState } from "react";
import { ImSearch } from "react-icons/im";
import { IoClose } from "react-icons/io5";

function SearchBar() {
  const [active, setIsActive] = useState(false);
  const toggle = () => setIsActive((val) => !val);
  const searchRef = OutsideClickDetector(() => setIsActive(false));

  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      active && inputElement.current.focus();
    }
  }, [active]);

  // w-[calc(100%-14px)]

  return (
    <div
      ref={searchRef}
      className={`absolute rounded overflow-hidden flex items-center justify-end z-20 top-1/2 -translate-y-1/2 right-7px transition-all duration-[.25s] bg-b ${
        active ? "w-[calc(100%-14px)]" : "w-9"
      }`}
    >
      <input
        ref={inputElement}
        type="text"
        className="block h-9 w-full border-1px border-white-1 rounded-tl rounded-bl bg-transparent text-xs text-white pl-3 font-medium outline-none"
        placeholder="Search"
      />
      <button
        className="min-w-[36px] h-9 bg-white-1 flex items-center justify-center relative"
        onClick={toggle}
      >
        <ImSearch
          className={`fill-white-8 center transition-all duration-[.25s] ${
            active ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <IoClose
          className={`fill-white-8 text-2xl center transition-all duration-[.25s] ${
            active ? "rotate-90 opacity-100" : "rotate-0 opacity-0"
          }`}
        />
      </button>
    </div>
  );
}

export default SearchBar;
