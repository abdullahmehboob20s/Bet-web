import React, { useEffect, useRef, useState } from "react";
import AccordionButton from "./AccordionButton";
import FlagBox from "./FlagBox";

function CompetitionCard({
  title,
  subtitle,
  countryName,
  children,
  open = true,
  className = "bg-white-1 pb-2",
  titleFontSize,
  iconRotation,
  ButtonLeftComponent,
  accordionButtonClassName,
  showDropdownIcon,
  subtitleClassName,
  childrenWrapperClassName = "pt-2 space-y-2",
  ButtonRightComponent,
  buttonRightComponentClassName,
  arrowClassName,
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

  useEffect(() => {
    setIsAccordion(open ? true : false);
  }, [open]);

  return (
    <div className={className}>
      <AccordionButton
        subtitleClassName={subtitleClassName}
        showDropdownIcon={showDropdownIcon}
        className={accordionButtonClassName && accordionButtonClassName}
        title={title}
        subtitle={subtitle}
        AccordionState={isAccordionOpen}
        AccordionSetter={setIsAccordion}
        titleFontSize={titleFontSize && titleFontSize}
        iconRotation={iconRotation && iconRotation}
        RightComponent={ButtonRightComponent}
        rightComponentClassName={buttonRightComponentClassName}
        arrowClassName={arrowClassName}
        ButtonLeftComponent={
          ButtonLeftComponent
            ? ButtonLeftComponent
            : countryName
            ? () => (
                <FlagBox
                  countryName={countryName && countryName}
                  className="mr-3"
                />
              )
            : null
        }
      />

      <div
        className="h-0 overflow-hidden transition-all duration-[.3s]"
        ref={accordionMenuRef}
      >
        <div className={childrenWrapperClassName}>{children}</div>
      </div>
    </div>
  );
}

export default CompetitionCard;
