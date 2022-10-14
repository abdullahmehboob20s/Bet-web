import InovationCard from "components/InovationCard";
import React from "react";
import { BiLaptop } from "react-icons/bi";
import { FaMoneyBillAlt, FaUsers } from "react-icons/fa";

function Inovations() {
  return (
    <div className="bg-inovation-gradient py-14 md:py-20 xl:py-28">
      <div className="container-2 mb-14">
        <h1 className="text-white italic text-center font-bold mb-6 text-4xl lg:text-5xl xl:text-6xl font-bebas">
          Innovations
        </h1>

        <div className="max-w-[780px] space-y-4 mx-auto">
          <p className="text-sm md:text-base xl:text-lg text-white text-center">
            Whether through unique features or state-of-the-art platforms, we
            are determined to stay ahead of the game by making innovation a top
            priority
          </p>

          <p className="text-sm md:text-base xl:text-lg text-white text-center">
            And since VBET is powered by BetConstruct, our in-house global
            solutions provider for the gaming industry, this collaboration
            ensures quick and efficient development of our products and
            services.
          </p>
        </div>
      </div>

      <div className="container-2 mb-24">
        <h2 className="text-white lg:text-hero text-center uppercase font-medium text-base md:text-lg xl:text-xl mb-8">
          A FLEXIBLE PLATFORM WITH INCREDIBLE <br /> ADVANTAGES
        </h2>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-center">
          <InovationCard
            className="flex-1"
            title="A team of 300 traders"
            Icon={() => (
              <FaUsers className="text-[28px] md:text-[38px] xl:text-[50px]" />
            )}
          />
          <InovationCard
            className="flex-1"
            title="In-house development of products and services"
            Icon={() => (
              <BiLaptop className="text-[28px] md:text-[38px] xl:text-[50px]" />
            )}
          />
          <InovationCard
            className="flex-1"
            title="Exclusive betting features"
            Icon={() => (
              <FaMoneyBillAlt className="text-[28px] md:text-[38px] xl:text-[50px]" />
            )}
          />
        </div>
      </div>

      <div className="container-2">
        <div className="mb-14">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-white font-bold font-bebas text-center italic leading-1 mb-4">
            PRODUCT AND FEATURES INNOVATION
          </h1>
          <p className="text-xs md:text-sm xl:text-base text-center max-w-[880px] mx-auto">
            This collaboration also enables VBET to focus on both tech
            innovation and software developed in-house that ensure its platforms
            are intuitive and ergonomic; the bookmaker continually seeks to
            surprise its players with new features.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-16 gap-x-8 lg:gap-x-12">
          <InovationCard
            className="flex-1"
            title="A team of 300 traders"
            Icon={() => (
              <FaUsers className="text-[28px] md:text-[38px] xl:text-[50px]" />
            )}
            desc="Cashout allows players to stay in control of their bets with one click. The feature can limit losses and ensure gains. VBET offers a wide range of Cashout types with Full and Partial, Automatic and Manual Cashout options."
          />

          <InovationCard
            className="flex-1"
            title="In-house development of products and services"
            Icon={() => (
              <BiLaptop className="text-[28px] md:text-[38px] xl:text-[50px]" />
            )}
            desc="Cashout allows players to stay in control of their bets with one click. The feature can limit losses and ensure gains. VBET offers a wide range of Cashout types with Full and Partial, Automatic and Manual Cashout options."
          />

          <InovationCard
            className="flex-1"
            title="Exclusive betting features"
            Icon={() => (
              <FaMoneyBillAlt className="text-[28px] md:text-[38px] xl:text-[50px]" />
            )}
            desc="Cashout allows players to stay in control of their bets with one click. The feature can limit losses and ensure gains. VBET offers a wide range of Cashout types with Full and Partial, Automatic and Manual Cashout options."
          />

          <InovationCard
            className="flex-1"
            title="A team of 300 traders"
            Icon={() => (
              <FaUsers className="text-[28px] md:text-[38px] xl:text-[50px]" />
            )}
            desc="Cashout allows players to stay in control of their bets with one click. The feature can limit losses and ensure gains. VBET offers a wide range of Cashout types with Full and Partial, Automatic and Manual Cashout options."
          />

          <InovationCard
            className="flex-1"
            title="In-house development of products and services"
            Icon={() => (
              <BiLaptop className="text-[28px] md:text-[38px] xl:text-[50px]" />
            )}
            desc="Cashout allows players to stay in control of their bets with one click. The feature can limit losses and ensure gains. VBET offers a wide range of Cashout types with Full and Partial, Automatic and Manual Cashout options."
          />

          <InovationCard
            className="flex-1"
            title="Exclusive betting features"
            Icon={() => (
              <FaMoneyBillAlt className="text-[28px] md:text-[38px] xl:text-[50px]" />
            )}
            desc="Cashout allows players to stay in control of their bets with one click. The feature can limit losses and ensure gains. VBET offers a wide range of Cashout types with Full and Partial, Automatic and Manual Cashout options."
          />
          <div className="md:col-span-3">
            <InovationCard
              className="flex-1 max-w-[24rem] mx-auto"
              title="Exclusive betting features"
              Icon={() => (
                <FaMoneyBillAlt className="text-[28px] md:text-[38px] xl:text-[50px]" />
              )}
              desc="Cashout allows players to stay in control of their bets with one click. The feature can limit losses and ensure gains. VBET offers a wide range of Cashout types with Full and Partial, Automatic and Manual Cashout options."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inovations;
