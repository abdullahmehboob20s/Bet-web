import React from "react";
import { Link } from "react-router-dom";
import Links from "./Links";

function RainbowContent() {
  return (
    <div className="bg-rainbow pb-20">
      <div className="mb-20">
        <Links />
      </div>

      <div
        className="container-2 flex flex-col items-center space-y-8 text-center mb-14"
        id="vbet"
      >
        <Link to="/">
          <img
            src="https://static.springbuilder.site/fs/userFiles-v2/vbetpromo/images/957-vbetvertical-16656667654928.png?v=1665666766"
            className="max-w-[100px]"
            alt=""
          />
        </Link>

        <p className="text-white-6 font-medium text-sm xl:text-base max-w-[480px] xl:max-w-[800px]">
          VBET is a global betting and gaming platform offering sports betting,
          online casino, live casino, poker, eSports, and other online games.{" "}
          <br />
          VBET is the flagship brand of the leading iGaming provider
          BetConstruct headquartered in Armenia.
        </p>
        <p className="text-white-6 font-medium text-sm xl:text-base max-w-[480px] xl:max-w-[800px]">
          VBET's mission is to offer a high-end platform capable of competing
          with the best. To do so, VBET relies on its experience, innovative
          products and a unique vision of gaming.
        </p>
      </div>

      <div className="container-2">
        <div className="py-8 sm:py-10 px-3 xl:px-6 rounded-lg border-1px border-white-6 gap-8 sm:gap-0 grid sm:grid-cols-3">
          <div>
            <h1 className="text-center leading-1">
              <span className="font-bebas font-bold italic text-5xl md:text-6xl xl:text-[96px]">
                19
              </span>
              <span className="font-bebas font-bold italic text-4xl md:text-5xl xl:text-[64px]">
                YEARS
              </span>
            </h1>

            <p className="text-white-6 text-xs md:text-sm xl:text-base text-center">
              OF EXPERIENCE
            </p>
          </div>

          <div>
            <h1 className="text-center leading-1">
              <span className="font-bebas font-bold italic text-5xl md:text-6xl xl:text-[96px]">
                120 +
              </span>
            </h1>

            <p className="text-white-6 text-xs md:text-sm xl:text-base text-center">
              COUNTRIES COVERED
            </p>
          </div>
          <div>
            <h1 className="text-center leading-1">
              <span className="font-bebas font-bold italic text-5xl md:text-6xl xl:text-[96px]">
                10 +
              </span>
            </h1>

            <p className="text-white-6 text-xs md:text-sm xl:text-base text-center">
              BETTING LICENSES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RainbowContent;
