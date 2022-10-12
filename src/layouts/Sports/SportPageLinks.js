import React from "react";
import sportsPageLinks from "assets/data/sports-page-links-data";
import PageLink from "components/PageLink";

function SportsPageLinks() {
  return (
    <div className="h-full flex bg-menu">
      {sportsPageLinks.map((item, index) => (
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

export default SportsPageLinks;
