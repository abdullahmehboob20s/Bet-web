import React from "react";
import { AiFillLock } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { IoFootball } from "react-icons/io5";
import { MdInfoOutline } from "react-icons/md";
import RadioButton from "./RadioButton";

function BonusJourneyCard() {
  return (
    <div className="bg-white-05 rounded p-10px">
      <div className="pb-3 border-b-1px border-white-1 mb-3">
        <div className="flex items-center space-x-3 mb-3">
          <div>
            <IoFootball className="text-3xl fill-white-4" />
          </div>

          <p className="text-sm text-white-4 font-medium">
            After every 5 bets, you will get a Free Bet equal to 25% of your 5
            bets’ average.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-white-4">Status</p>
          <div className="flex items-center space-x-1">
            <AiFillLock className="fill-white-4 text-base" />
            <p className="text-xs text-white-4 font-medium">Inactive</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 opacity-30 pointer-events-none">
        <RadioButton
          checked={false}
          label={
            <span className="flex items-center space-x-2">
              <span>Place your 1st bet</span>
              <MdInfoOutline size={18} />
            </span>
          }
          name="place"
        />
        <RadioButton
          checked={false}
          label={
            <span className="flex items-center space-x-2">
              <span>Place your 2nd bet</span>
              <MdInfoOutline size={18} />
            </span>
          }
          name="place"
        />
        <RadioButton
          checked={false}
          label={
            <span className="flex items-center space-x-2">
              <span>Place your 3rd bet</span>
              <MdInfoOutline size={18} />
            </span>
          }
          name="place"
        />
        <RadioButton
          checked={false}
          label={
            <span className="flex items-center space-x-2">
              <span>Place your 4th bet</span>
              <MdInfoOutline size={18} />
            </span>
          }
          name="place"
        />
        <RadioButton
          checked={false}
          label={
            <span className="flex items-center space-x-2">
              <span>Place your 5th bet</span>
              <MdInfoOutline size={18} />
            </span>
          }
          name="place"
        />
      </div>
    </div>
  );
}

export default BonusJourneyCard;
