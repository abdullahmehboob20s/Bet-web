import { useState } from "react";
import AccordionButton from "./AccordionButton";
import MatchAccordion from "./MatchAccordion";

function MatchCards() {
  const [open, setOpen] = useState(true);

  console.log(open);

  return (
    <div className="space-y-1">
      <AccordionButton
        title="Markets"
        className="w-full h-[32px] flex items-center justify-between container-wrapper"
        AccordionState={open}
        AccordionSetter={setOpen}
      />

      {new Array(10).fill("").map(() => (
        <>
          <MatchAccordion open={open} title="Match Result" />
          <MatchAccordion open={open} title="Double Chance" />
          <MatchAccordion
            open={open}
            title="Rest Of The Match (Current Score: 1-0)"
            twoColumns={true}
            titles={["Over", "Under"]}
          />
        </>
      ))}
    </div>
  );
}

export default MatchCards;
