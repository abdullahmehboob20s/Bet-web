import React from "react";
import livePageLinksData from "assets/data/live-page-links-data";
import PageLink from "./PageLink";

function LivePageLinks() {
  return (
    <div className="h-full flex bg-menu">
      {livePageLinksData.map((item, index) => (
        <PageLink title={item.title} link={item.link} target={item.target} />
      ))}
    </div>
  );
}

export default LivePageLinks;
