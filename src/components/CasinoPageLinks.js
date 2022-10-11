import React from "react";
import LivePageLink from "./livePageLink";
import casinoPageLinks from "assets/data/casino-page-links-data";

function CasinoPageLinks() {
  return (
    <div className="h-full flex bg-menu">
      {casinoPageLinks.map((item, index) => (
        <LivePageLink
          title={item.title}
          link={item.link}
          target={item.target}
        />
      ))}
    </div>
  );
}

export default CasinoPageLinks;
