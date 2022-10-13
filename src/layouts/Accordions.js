import Accordion from "components/Accordion";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Anchor = ({ title, to, state, target = "_self" }) => {
  return (
    <Link
      target={target}
      rel="noreferrer"
      className="text-sm font-bold text-white-5 block w-fit"
      to={to}
      state={state}
    >
      {title}
    </Link>
  );
};

function Accordions() {
  const location = useLocation();

  return (
    <div>
      <div className="container-wrapper">
        <Accordion title="ABOUT">
          <div className="space-y-3 mb-4">
            <Anchor to="/faq" title="About us" />
            <Anchor to="/faq" title="Affiliation" />
          </div>
        </Accordion>
        <Accordion title="HELP">
          <div className="space-y-3 mb-4">
            <Anchor to="/faq" title="FAQ" state={{ background: location }} />
          </div>
        </Accordion>
        <Accordion title="REDULATIONS">
          <div className="space-y-3 mb-4">
            <Anchor
              to="/privacy-policy"
              title="Privacy Policy"
              state={{ background: location }}
            />
          </div>
        </Accordion>
        <Accordion title="STATISTICS">
          <Anchor to="/results" title="Results" />
        </Accordion>
      </div>
    </div>
  );
}

export default Accordions;
