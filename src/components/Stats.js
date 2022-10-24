import { BiFootball } from "react-icons/bi";
import { BsBadgeTmFill, BsBarChartFill } from "react-icons/bs";
import { FaSdCard } from "react-icons/fa";

function Stats() {
  return (
    <div className="bg-white-07 p-10px space-y-6px">
      <div className="flex items-center justify-end pb-1">
        <div className="w-[28px] text-10px flex justify-center">
          <BsBadgeTmFill className="fill-white" />
        </div>
        <div className="w-[28px] text-10px flex justify-center">
          <FaSdCard className="fill-[gold]" />
        </div>
        <div className="w-[28px] text-10px flex justify-center">
          <FaSdCard className="fill-[#ff3449]" />
        </div>
        <div className="w-[28px] text-10px flex justify-center">
          <BsBarChartFill />
        </div>
        <div className="w-[28px] text-10px flex justify-center">
          <BiFootball />
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex-1 overflow-hidden flex items-center space-x-1">
          <img
            src="https://statistics.bcapps.org/images/e/s/115/230497.png"
            className="h-[12px]"
            alt=""
          />

          <p className="text-10px text-white-7 ellipsis">
            Auckland United FC (Wom)
          </p>
        </div>

        <div className="w-[28px] text-10px flex justify-center">
          <p className="text-10px">2</p>
        </div>
        <div className="w-[28px] text-10px flex justify-center">
          <p className="text-10px">0</p>
        </div>
        <div className="w-[28px] text-10px flex justify-center">
          <p className="text-10px">0</p>
        </div>
        <div className="w-[28px] text-10px flex justify-center">
          <p className="text-10px">4</p>
        </div>
        <div className="w-[28px] text-10px flex justify-center">
          <p className="text-10px">0</p>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex-1 overflow-hidden flex items-center space-x-1">
          <img
            src="https://statistics.bcapps.org/images/e/s/115/230497.png"
            className="h-[12px]"
            alt=""
          />

          <p className="text-10px text-white-7 ellipsis">
            Auckland United FC (Wom)
          </p>
        </div>

        <div className="w-[28px] text-10px flex justify-center">
          <p className="text-10px">2</p>
        </div>
        <div className="w-[28px] text-10px flex justify-center">
          <p className="text-10px">0</p>
        </div>
        <div className="w-[28px] text-10px flex justify-center">
          <p className="text-10px">0</p>
        </div>
        <div className="w-[28px] text-10px flex justify-center">
          <p className="text-10px">4</p>
        </div>
        <div className="w-[28px] text-10px flex justify-center">
          <p className="text-10px">0</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
