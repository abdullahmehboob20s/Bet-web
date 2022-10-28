import { useEffect, useState } from "react";
import AccordionButton from "./AccordionButton";
import MatchAccordion from "./MatchAccordion";

function MatchCards() {
  const [open, setOpen] = useState(true);
  const [items, setItems] = useState([
    { title: "Match Result", twoColumns: false, open: true, titles: [] },
    { title: "Double Chance", twoColumns: false, open: true, titles: [] },
    {
      title: "Rest Of The Match (Current Score: 1-0)",
      twoColumns: true,
      open: true,
      titles: ["Over", "Under"],
    },
    { title: "Match Result", twoColumns: false, open: true, titles: [] },
    {
      title: "Double Chance",
      twoColumns: false,
      open: true,
      titles: ["Over", "Under", "Over"],
    },
    {
      title: "Rest Of The Match (Current Score: 1-0)",
      twoColumns: false,
      open: true,
      titles: [],
    },
    {
      title: "Match Result",
      twoColumns: true,
      open: true,
      titles: ["Over", "Under"],
    },
    { title: "Double Chance", twoColumns: false, open: true, titles: [] },
    {
      title: "Rest Of The Match (Current Score: 1-0)",
      twoColumns: false,
      open: true,
      titles: [],
    },
    {
      title: "Match Result",
      twoColumns: true,
      open: true,
      titles: ["Over", "Under"],
    },
    { title: "Double Chance", twoColumns: false, open: true, titles: [] },
  ]);

  return (
    <div className="space-y-1">
      <AccordionButton
        title="Markets"
        className="w-full h-[32px] flex items-center justify-between container-wrapper"
        AccordionState={open}
        AccordionSetter={setOpen}
      />

      {items.map((item, index) => (
        <MatchAccordion
          key={index}
          open={open ? true : false}
          title={item.title}
          twoColumns={item.twoColumns}
          titles={item.titles}
        />
      ))}
    </div>
  );
}

export default MatchCards;
