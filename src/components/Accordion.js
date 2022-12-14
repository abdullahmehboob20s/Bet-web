import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Accordion({ title, children }) {
  const [isAccordionOpen, setIsAccordion] = useState(false);
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
    <div className="bg-purple rounded sm:rounded-xl lg:rounded-2xl">
      <button
        className="flex items-center justify-between h-10 border-b-[1px] border-white-2 text-sm text-white font-bold w-full"
        onClick={() => setIsAccordion((val) => !val)}
      >
        <span className="text-left block fs-24px text-white font-semibold">
          {title}
        </span>
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
        <div className="pt-4">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
