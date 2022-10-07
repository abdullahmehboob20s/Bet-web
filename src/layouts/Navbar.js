import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="h-mobile-header-main-section-height flex items-center border-2 border-[rgba(255,255,255,.05)]">
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
        <a
          className="text-10px uppercase px-10px text-white opacity-80 tracking-[.1em] w-full whitespace-nowrap"
          target="_self"
          href="/en/sports/live/event-view"
        >
          Live
        </a>
        <a
          className="text-10px uppercase px-10px text-white opacity-80 tracking-[.1em] w-full whitespace-nowrap"
          target="_self"
          href="/en/sports/pre-match/event-view"
        >
          Sports
        </a>
        <a
          className="text-10px uppercase px-10px text-white opacity-80 tracking-[.1em] w-full whitespace-nowrap"
          target="_self"
          href="/en/pinnacle"
        >
          Pinnacle
        </a>
        <a
          className="text-10px uppercase px-10px text-white opacity-80 tracking-[.1em] w-full whitespace-nowrap"
          target="_self"
          href="/en/casino/slots"
        >
          Casino
        </a>
        <a
          className="text-10px uppercase px-10px text-white opacity-80 tracking-[.1em] w-full whitespace-nowrap"
          target="_self"
          href="/en/live-casino/home"
        >
          Live Casino
        </a>
        <a
          className="text-10px uppercase px-10px text-white opacity-80 tracking-[.1em] w-full whitespace-nowrap"
          target="_self"
          href="/en/page/casino/poker/28"
        >
          Poker
        </a>
        <a
          className="text-10px uppercase px-10px text-white opacity-80 tracking-[.1em] w-full whitespace-nowrap"
          target="_self"
          data-badge="New"
          href="/en/casino/game-view/525"
        >
          Predictor
        </a>
        <a
          className="text-10px uppercase px-10px text-white opacity-80 tracking-[.1em] w-full whitespace-nowrap"
          target="_self"
          href="/en/esports"
        >
          Esports
        </a>
        <a
          className="text-10px uppercase px-10px text-white opacity-80 tracking-[.1em] w-full whitespace-nowrap"
          target="_self"
          href="/en/virtual-sports/betconstruct"
        >
          Virtual Sports
        </a>
        <a
          className="text-10px uppercase px-10px text-white opacity-80 tracking-[.1em] w-full whitespace-nowrap"
          target="_self"
          href="/en/games"
        >
          Games
        </a>
        <a
          className="text-10px uppercase px-10px text-white opacity-80 tracking-[.1em] w-full whitespace-nowrap"
          target="_self"
          href="/en/tv-games"
        >
          TV Games
        </a>
        <a
          className="text-10px uppercase px-10px text-white opacity-80 tracking-[.1em] w-full whitespace-nowrap"
          target="_self"
          href="/en/promotions"
        >
          Promotions
        </a>
      </div>
    </div>
  );
}

export default Navbar;
