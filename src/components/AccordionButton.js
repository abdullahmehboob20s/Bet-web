import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function AccordionButton({
  title,
  subtitle,
  AccordionState,
  AccordionSetter,
  ButtonLeftComponent,
  titleFontSize = "text-xs",
  onClick,
  iconRotation = "0deg",
  className = "bg-transparent h-[36px]",
}) {
  const toggle = () => {
    if (AccordionSetter) {
      AccordionSetter((val) => !val);
      return;
    }

    onClick();
  };

  return (
    <button
      className={`outline-none flex items-center justify-between w-full space-x-8 ${className}`}
      onClick={toggle}
    >
      <div className="flex items-center">
        {ButtonLeftComponent && <ButtonLeftComponent />}
        <p className={`text-left w-full ellipsis ${titleFontSize}`}>
          {title && <span className="block ellipsis">{title}</span>}
          {subtitle && <span className="block ellipsis">{subtitle}</span>}
        </p>
      </div>

      <span className="flex">
        <IoIosArrowDown
          style={{
            transform: AccordionState
              ? `rotate(180deg)`
              : `rotate(${iconRotation})`,
          }}
          className={`fill-white-8 text-lg transition-all duration-[.3s]`}
        />
      </span>
    </button>
  );
}

export default AccordionButton;
