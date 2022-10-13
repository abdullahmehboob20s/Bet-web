import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { IoMdWallet } from "react-icons/io";
import { MdTakeoutDining } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toogleVisibility } from "redux/balanceVisibilityState";

function BalanceCard({ bg }) {
  const { visible } = useSelector((state) => state.balanceVisibilityState);
  const dispatch = useDispatch();

  return (
    <div
      className="glass-effect relative z-20 pt-5 pb-4 px-4 rounded overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      <AiFillDollarCircle className="text-[5rem] absolute top-[-20px] right-[-22px] -z-10 opacity-10" />

      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-sm opacity-90 leading-1">Main Balance</p>
          <p className="text-xl font-bold text-white">
            {visible ? "0.00 $" : "*******"}
          </p>
        </div>

        <button
          className="bg-white-1 h-[34px] w-[34px] rounded text-xl flex items-center justify-center"
          onClick={() => dispatch(toogleVisibility(!visible))}
        >
          {visible ? (
            <BsFillEyeFill className="fill-white-6" />
          ) : (
            <BsFillEyeSlashFill className="fill-white-6" />
          )}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <button className="flex items-center justify-center space-x-2 h-[34px] rounded bg-white-2 hover:bg-white-3 transition-all duration-[.24s] uppercase text-sm px-5px text-white">
          <IoMdWallet className="text-xl" />
          <span className="leading-1">Deposit</span>
        </button>
        <button className="flex items-center justify-center space-x-2 h-[34px] rounded bg-white-2 hover:bg-white-3 transition-all duration-[.24s] uppercase text-sm px-5px text-white">
          <MdTakeoutDining className="text-xl" />
          <span className="leading-1">Withdraw</span>
        </button>
      </div>
    </div>
  );
}

export default BalanceCard;
