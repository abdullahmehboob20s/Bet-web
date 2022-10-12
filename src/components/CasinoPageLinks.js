import React from "react";
import casinoPageLinks from "assets/data/casino-page-links-data";
import PageLink from "./PageLink";

function CasinoPageLinks() {
  return (
    <div className="h-full flex bg-menu">
      {casinoPageLinks.map((item, index) => (
        <PageLink
          key={index}
          title={item.title}
          link={item.link}
          target={item.target}
        />
      ))}
    </div>
  );
}

export default CasinoPageLinks;
