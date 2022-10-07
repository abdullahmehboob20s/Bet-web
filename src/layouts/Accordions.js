import Accordion from "components/Accordion";
import React from "react";

function Accordions() {
  return (
    <div>
      <div className="container-wrapper">
        <Accordion title="ABOUT"></Accordion>
        <Accordion title="HELP"></Accordion>
        <Accordion title="REDULATIONS"></Accordion>
        <Accordion title="GAMING RULES"></Accordion>
        <Accordion title="STATISTICS"></Accordion>
      </div>
    </div>
  );
}

export default Accordions;
