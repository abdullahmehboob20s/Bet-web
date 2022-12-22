import CompetitionCard from "components/CompetitionCard";
import { BiLink, BiStar } from "react-icons/bi";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import MatchStatCard from "./MatchStatCard";
import { v4 as uuidv4 } from "uuid";

function MatchAccordion({
  open = false,
  title,
  twoColumns,
  items = 6,
  titles = [],
}) {
  return (
    <CompetitionCard
      accordionButtonClassName={"bg-white-05 container-wrapper py-[5px]"}
      open={open}
      title={title}
      className=""
      titleFontSize="text-xs"
      buttonRightComponentClassName="divider"
      arrowClassName="divider-item"
      childrenWrapperClassName="mt-1px"
      ButtonLeftComponent={() => (
        <span className="text-lg mr-2 flex">
          <BiStar />
        </span>
      )}
      ButtonRightComponent={() => (
        <>
          <span className="divider-item flex items-center space-x-1">
            <BiLink />
            <span className="text-xs font-light">1</span>
          </span>
          <span className="divider-item">
            <RiMoneyDollarCircleLine className="fill-oc-1" />
          </span>
          <span className="divider-item">
            <BsFillBarChartLineFill className="fill-white-6 text-sm" />
          </span>
        </>
      )}
    >
      <div
        className={`grid ${twoColumns ? "grid-cols-2" : "grid-cols-3"} gap-1px`}
      >
        {titles.length > 1 &&
          titles.map((title, index) => (
            <div
              key={index}
              className="h-[26px] text-white-6 bg-[rgba(255,255,255,.15)] flex items-center justify-center text-xs"
            >
              {title}
            </div>
          ))}

        {new Array(items).fill("").map((i, index) => (
          <MatchStatCard
            key={index}
            id={uuidv4()}
            title="1.10"
            desc="Draw"
            isDown={true}
          />
        ))}
      </div>
    </CompetitionCard>
  );
}

export default MatchAccordion;
