import FootbalFilterButton from "components/FootbalFilterButton";
import { BiFootball } from "react-icons/bi";
import { BsBarChartFill, BsFillBadgeHdFill } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";
import { GiSoccerField } from "react-icons/gi";
import { MdShowChart } from "react-icons/md";

function ScoreCardBanner({
  showEvents,
  showFeild,
  showAttackStatsCards,
  showStats,
  setShowEvents,
  setShowAttackStatsCards,
  setShowFeild,
  setShowStats,
}) {
  return (
    <div className="live-score-bg-soccer py-10px relative rounded z-10">
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.4)] -z-20"></div>

      <div className="flex px-10px items-center justify-between mb-10px">
        <div className="flex items-center space-x-2">
          <BiFootball />
          <div className="min-w-[22px] h-[14px] bg-flags bg-no-repeat bg-cover spain"></div>
          <p className="text-xs capitalize text-white-8">Primera A</p>
        </div>

        <div className="rounded overflow-hidden flex space-x-2px h-[19px]">
          <div className="flex items-center justify-center text-10px px-[5px] text-white h-full bg-[rgba(var(--oc-1-rgb),.5)]">
            2nd-half
          </div>
          <div className="flex items-center justify-center text-10px px-[5px] text-white h-full bg-oc-1">
            53
          </div>
        </div>
      </div>

      <div className="px-10px bg-[rgba(0,0,0,.4)] py-10px space-y-1">
        <div className="flex items-center justify-between">
          <p className="text-sm capitalize text-white-9 ellipsis">
            Once Caldas
          </p>
          <p className="text-sm capitalize text-white-9 ellipsis">1</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm capitalize text-white-9 ellipsis">
            Alianza Petrolera FC
          </p>
          <p className="text-sm capitalize text-white-9 ellipsis">1</p>
        </div>
      </div>

      <div className="px-10px">
        <div className="pb-3 mb-3 border-b-1px border-white-6">
          <div className="mt-3 flex items-center justify-center relative">
            <p className="text-xs text-white-6 text-center ellipsis">
              1 : 1, (0:1), (1:0) 84`
            </p>

            <BsBarChartFill className="fill-white-6 absolute top-1/2 right-0 -translate-y-1/2 text-sm" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-1">
        <FootbalFilterButton
          stateGetter={showFeild}
          stateSetter={setShowFeild}
          Icon={(props) => <GiSoccerField {...props} size={20} />}
        />
        <FootbalFilterButton
          stateGetter={showStats}
          stateSetter={setShowStats}
          Icon={(props) => <BsFillBadgeHdFill {...props} size={18} />}
        />
        <FootbalFilterButton
          stateGetter={showAttackStatsCards}
          stateSetter={setShowAttackStatsCards}
          Icon={(props) => <FaChartPie {...props} size={18} />}
        />
        <FootbalFilterButton
          stateGetter={showEvents}
          stateSetter={setShowEvents}
          Icon={(props) => <MdShowChart {...props} size={18} />}
        />
      </div>
    </div>
  );
}

export default ScoreCardBanner;
