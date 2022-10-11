import React from "react";
import sportsPageLinks from "assets/data/sports-page-links-data";
import LivePageLink from "components/LivePageLink";

function SportsPageLinks() {
  return (
    <div className="h-full flex bg-menu">
      {sportsPageLinks.map((item, index) => (
        <LivePageLink
          key={index}
          title={item.title}
          link={item.link}
          target={item.target}
        />
      ))}
    </div>
  );
}

export default SportsPageLinks;
