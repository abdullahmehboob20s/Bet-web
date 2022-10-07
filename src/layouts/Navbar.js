import NavBannerLink from "components/NavBannerLink";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-[100]">
      <div className="h-mobile-header-main-section-height flex items-center bg-b border-b-2 border-[rgba(255,255,255,.05)]">
        <div className="px-1 pr-4 flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <a className="logo" href="/en/">
              <img
                className="max-w-[100px]"
                src="https://cmsbetconstruct.com/storage/medias/vbet/media_4_e78a4ffd98a54aa7f8225fcb13f555ea.gif?v=10/06/2022-16:31"
                alt=""
              />
            </a>
            <a
              target="_self"
              className="h-6 w-6 block"
              href="/en/?profile=open&amp;account=bonus-journey&amp;page=journeys"
            >
              <img
                className="h-full w-full"
                src="https://cmsbetconstruct.com/storage/medias/vbet/media_4_4ac7eaa91a5473d2e549c9fd4cdaa78e.gif"
                alt=""
              />
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <button className="text-xs text-white uppercase underline">
              Sign in
            </button>
            <button className="btn text-xs uppercase h-7">Register</button>

            <button className="w-7 h-7 rounded-full flex items-center justify-center bg-[rgba(255,255,255,.1)] text-[rgba(255,255,255,.8)] text-xl">
              <BsThreeDotsVertical />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-mobile-header-main-section-height left-0 w-full h-mobile-header-navigation-height bg-menu flex items-center border-b-2 border-[rgba(255,255,255,.05)] overflow-x-scroll hide-scrollbar">
        <NavBannerLink title="Live" />
        <NavBannerLink title="Sports" />
        <NavBannerLink title="Pinnacle" />
        <NavBannerLink title="Casino" />
        <NavBannerLink title="Live Casino" />
        <NavBannerLink title="Sport Tournaments" isNew={true} />
        <NavBannerLink title="Poker" />
        <NavBannerLink title="Predictor" isNew={true} />
        <NavBannerLink title="Esports" />
        <NavBannerLink title="Virtual Sports" />
        <NavBannerLink title="Games" />
        <NavBannerLink title="TV Games" />
        <NavBannerLink title="Promotions" />
      </div>
    </div>
  );
}

export default Navbar;
