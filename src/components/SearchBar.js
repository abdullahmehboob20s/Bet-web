import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { ImSearch } from "react-icons/im";
import { IoClose } from "react-icons/io5";

const InputComponent = forwardRef(
  ({ directionToLeft, active, rounded }, { wrapperRef, inputElementRef }) => {
    return (
      <div
        className={`w-0 transition-all duration-[.24s] overflow-hidden bg-b ${
          active ? "pointer-events-auto" : "pointer-events-none"
        }`}
        ref={wrapperRef}
      >
        <input
          ref={inputElementRef}
          type="text"
          className={`block h-9 w-full border-1px border-white-1 bg-transparent text-xs text-white px-3 font-medium outline-none ${
            rounded && "rounded"
          } ${directionToLeft ? "rounded-l-none" : "rounded-r-none"}`}
          placeholder="Search"
        />
      </div>
    );
  }
);

function SearchBar({
  className = "rounded px-7px bg-b",
  buttonClassName = "bg-white-1",
  directionToLeft = false,
  rounded = true,
}) {
  const [active, setIsActive] = useState(false);
  const searchRef = OutsideClickDetector(() => {
    inputWrapperRef.current.style.width = 0;
    setIsActive(false);
  });
  const inputElement = useRef(null);
  const inputWrapperRef = useRef(null);

  const toggle = () => {
    if (inputWrapperRef.current.clientWidth === 0) {
      inputWrapperRef.current.style.width = "100%";

      setIsActive(true);
    } else {
      inputWrapperRef.current.style.width = 0;

      setIsActive(false);
    }
  };

  useEffect(() => {
    if (inputElement.current) {
      active && inputElement.current.focus();
    }
  }, [active]);

  // w-[calc(100%-14px)]

  // ${
  //   active ? "w-[calc(100%-14px)]" : "w-9"
  // }

  return (
    <div
      ref={searchRef}
      className={`absolute overflow-hidden flex items-center z-20 top-1/2 -translate-y-1/2 transition-all duration-[.25s] ${className} w-full pointer-events-none left-0 ${
        directionToLeft ? "justify-start" : "justify-end"
      }`}
    >
      {!directionToLeft && (
        <InputComponent
          rounded={rounded}
          directionToLeft={directionToLeft}
          active={active}
          ref={{
            wrapperRef: inputWrapperRef,
            inputElementRef: inputElement,
          }}
        />
      )}

      <button
        className={`outline-none min-w-[36px] h-9 flex items-center justify-center relative pointer-events-auto ${buttonClassName}   ${
          rounded && "rounded"
        } ${
          active
            ? directionToLeft
              ? "rounded-r-none"
              : "rounded-l-none"
            : null
        }`}
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

      {directionToLeft && (
        <InputComponent
          rounded={rounded}
          directionToLeft={directionToLeft}
          active={active}
          ref={{
            wrapperRef: inputWrapperRef,
            inputElementRef: inputElement,
          }}
        />
      )}
    </div>
  );
}

export default SearchBar;
