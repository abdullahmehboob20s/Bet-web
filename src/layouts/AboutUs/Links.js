import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Links() {
  return (
    <div className="container-2 ">
      <div className="flex items-center justify-center flex-wrap py-6 border-b-1px -mx-8 border-b-white-4">
        <ScrollLink
          offset={-100}
          to="vbet"
          className="text-white-7 text-sm uppercase my-2 mx-8 cursor-pointer"
        >
          VBET
        </ScrollLink>
        <ScrollLink
          offset={-100}
          to="history"
          className="text-white-7 text-sm uppercase my-2 mx-8 cursor-pointer"
        >
          HISTORY
        </ScrollLink>
        <ScrollLink
          offset={-100}
          to="our"
          className="text-white-7 text-sm uppercase my-2 mx-8 cursor-pointer"
        >
          OUR PRODUCTS AND SERVICES
        </ScrollLink>
        <ScrollLink
          offset={-100}
          to="vision"
          className="text-white-7 text-sm uppercase my-2 mx-8 cursor-pointer"
        >
          our vision
        </ScrollLink>
        <ScrollLink
          offset={-100}
          to="innovations"
          className="text-white-7 text-sm uppercase my-2 mx-8 cursor-pointer"
        >
          innovations
        </ScrollLink>
        <ScrollLink
          offset={-100}
          to="friends"
          className="text-white-7 text-sm uppercase my-2 mx-8 cursor-pointer"
        >
          friends and partners
        </ScrollLink>
      </div>
    </div>
  );
}

export default Links;
