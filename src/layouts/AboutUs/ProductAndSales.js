import React from "react";

function ProductAndSales() {
  return (
    <div className="bg-purple-gradient py-12 lg:py-20">
      <div className="container-2 mb-14">
        <div className="grid lg:grid-cols-2 items-center">
          <div>
            <h1 className="font-bebas mb-3 lg:mb-0 text-center lg:text-left text-3xl sm:text-4xl lg:text-5xl xl:text-[66px] text-white font-bold italic leading-1">
              OUR PRODUCTS AND SERVICES
            </h1>
          </div>
          <div>
            <img
              src="https://static.springbuilder.site/fs/userFiles-v2/vbetpromo/images/992-macbook-pro-01-vbet.png?v=1615964263"
              className="max-w-[30rem] mx-auto lg:mx-0 lg:max-w-none w-full"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container-2 mb-14">
        <h1 className="text-center font-semibold text-hero text-lg md:text-xl xl:text-[26px] mb-5">
          SPORTSBOOK
        </h1>
        <div className="py-8 sm:py-10 px-3 xl:px-6 rounded-lg border-1px border-white-6 gap-8 sm:gap-0 grid sm:grid-cols-3">
          <div>
            <h1 className="text-center leading-1">
              <span className="font-bebas font-bold italic text-5xl md:text-6xl xl:text-[96px]">
                70 +
              </span>
            </h1>

            <p className="text-white-6 text-xs md:text-sm xl:text-base text-center">
              Sports
            </p>
          </div>

          <div>
            <h1 className="text-center leading-1">
              <span className="font-bebas font-bold italic text-5xl md:text-6xl xl:text-[96px]">
                45.000 +
              </span>
            </h1>

            <p className="text-white-6 text-xs md:text-sm xl:text-base text-center">
              EVENTS PER YEAR
            </p>
          </div>
          <div>
            <h1 className="text-center leading-1">
              <span className="font-bebas font-bold italic text-5xl md:text-6xl xl:text-[96px]">
                250 +
              </span>
            </h1>

            <p className="text-white-6 text-xs md:text-sm xl:text-base text-center">
              MARKETS PER EVENT
            </p>
          </div>
        </div>
      </div>

      <div className="container-2 mb-8">
        <h1 className="text-center font-semibold text-hero text-lg md:text-xl xl:text-[26px] mb-5">
          CASINO
        </h1>
        <div className="py-8 sm:py-10 px-3 xl:px-6 rounded-lg border-1px border-white-6 gap-8 sm:gap-0 grid sm:grid-cols-3">
          <div className="flex items-center justify-center">
            <h1 className="text-center leading-1">
              <span className="font-bebas font-bold italic text-4xl md:text-5xl xl:text-[64px]">
                LIVE DEALERS
              </span>
            </h1>
          </div>

          <div>
            <h1 className="text-center leading-1">
              <span className="font-bebas font-bold italic text-5xl md:text-6xl xl:text-[96px]">
                8000 +
              </span>
            </h1>

            <p className="text-white-6 text-xs md:text-sm xl:text-base text-center">
              GAMES
            </p>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-center leading-1">
              <span className="font-bebas font-bold italic text-3xl md:text-4xl xl:text-[40px]">
                BONUSES, FREE SPINS, JACKPOTS AND MORE
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="container-2">
        <h1 className="text-sm lg:text-base xl:text-xl text-white font-semibold text-center">
          We also have POKER, VIRTUAL SPORTS, eSPORTS, FANTASY SPORTS and much,
          much more.
        </h1>
      </div>
    </div>
  );
}

export default ProductAndSales;
