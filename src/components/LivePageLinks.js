import React from "react";
import livePageLinksData from "assets/data/live-page-links-data";
import LivePageLink from "./livePageLink";

function LivePageLinks() {
  return (
    <div className="h-full flex bg-menu">
      {livePageLinksData.map((item, index) => (
        <LivePageLink
          title={item.title}
          link={item.link}
          target={item.target}
        />
      ))}
    </div>
  );
}

export default LivePageLinks;
