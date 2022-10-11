import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function CompetitionCard({
  title,
  subtitle,
  flagPosition = "0 28.7197231834%",
  children,
  open = true,
}) {
  const [isAccordionOpen, setIsAccordion] = useState(open);
  const accordionMenuRef = useRef(null);

  useEffect(() => {
    if (isAccordionOpen) {
      accordionMenuRef.current.style.height =
        accordionMenuRef.current.scrollHeight + "px";
    } else {
      accordionMenuRef.current.style.height = 0;
    }
  }, [isAccordionOpen]);

  return (
    <div className="bg-white-1 pb-2">
      <div className="container-wrapper">
        <button
          className="outline-none flex items-center justify-between w-full space-x-8 h-[36px]"
          onClick={() => setIsAccordion((val) => !val)}
        >
          <div className="flex items-center space-x-10px">
            <div
              className="w-[22px] h-[14px] bg-flags bg-no-repeat bg-cover"
              style={{ backgroundPosition: flagPosition }}
            ></div>
            <p className="text-left text-xs w-full ellipsis">
              <span className="block ellipsis">{title}</span>
              <span className="block ellipsis">{subtitle}</span>
            </p>
          </div>

          <span className="flex">
            <IoIosArrowDown
              className={`text-white text-lg transition-all duration-[.3s] ${
                isAccordionOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </span>
        </button>

        <div
          className="h-0 overflow-hidden transition-all duration-[.3s]"
          ref={accordionMenuRef}
        >
          <div className="pt-2 space-y-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default CompetitionCard;
