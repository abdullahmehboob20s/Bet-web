import React from "react";
import Accordions from "./Accordions";
import Contact from "./Contact";
import Dropdowns from "./Dropdowns";
import Partners from "./Partners";

function Footer() {
  return (
    <div>
      <div className="mb-5">
        <Dropdowns />
      </div>
      <div className="mb-6">
        <Accordions />
      </div>
      <div className="mb-6">
        <Contact />
      </div>
      <div className="mb-3">
        <Partners />
      </div>

      <p className="text-center text-white-4 text-xs font-medium mb-3">
        © 2003 - 2022 VBET
      </p>
    </div>
  );
}

export default Footer;
