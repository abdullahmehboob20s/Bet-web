import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import FormButton from "./FormButton";
import url from "./GiftImgUrl";

function ClaimBonusCard() {
  return (
    <div className="bg-white-05 rounded p-10px cursor-pointer">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-1">
        <img src={url} className="w-[70px] object-cover" alt="" />

        <div className="overflow-hidden">
          <p className="ellipsis text-13px text-white font-semibold mb-[2px]">
            100% FIRST DEPOSIT BONUS UP TO 100 EUR
          </p>
          <p className="ellipsis text-xs text-white">
            Join VBET Casino and get a welcome package of up to 500€ and 300
            free spins.
          </p>
        </div>

        <button className="text-xl">
          <IoIosArrowForward className="fill-white-6" />
        </button>
      </div>

      <div className="pt-4 border-t-1px border-white-1">
        <div className="space-y-1 mb-5">
          <div className="flex items-center justify-between">
            <p className="text-xs text-white-4 font-medium">Status</p>
            <p className="text-xs text-[#109121] font-medium">Availabe</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-white-4 font-medium">Time to Wager</p>
            <p className="text-xs text-white font-semibold">30 Days</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-white-4 font-medium">
              Wagering Requirement
            </p>
            <p className="text-xs text-white font-semibold">x35</p>
          </div>
        </div>

        <FormButton label="Claim Bonus" variant={1} />
      </div>
    </div>
  );
}

export default ClaimBonusCard;
