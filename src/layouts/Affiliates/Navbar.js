import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-[200] bg-[rgba(0,0,0,.6)] h-[50px] md:h-[60px] flex items-center">
      <div className="container-2 flex items-center justify-between">
        <Link className="logo" to="/">
          <img
            className="max-w-[100px]"
            src="https://static.springbuilder.site/fs/userFiles-v2/vbetcomaffiliates/images/logo.svg?v=1641905058"
            alt=""
          />
        </Link>

        <Link
          to="/"
          className="rounded bg-white py-[0.3rem] md:py-2 px-4 xl:px-6 text-b font-medium cursor-pointer text-xs xl:text-sm"
        >
          Back to VBet
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
