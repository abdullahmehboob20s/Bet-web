import React from "react";
import { Link } from "react-router-dom";
import Bar from "./Bar";

function SlotBar({ title, linkTitle, link = "/" }) {
  return (
    <Bar
      className="pt-3 pb-10px border-b-1px border-white-1"
      titleClassName="text-base text-white"
      title={title}
      RightComponent={() => (
        <Link to={link} className="text-sm text-white-5 cursor-pointer">
          {linkTitle}
        </Link>
      )}
    />
  );
}

export default SlotBar;
