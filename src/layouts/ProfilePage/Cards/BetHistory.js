import ProfileCardsHeader from "components/ProfileCardsHeader";
import ProfileCard from "components/ProfileCard";
import { useNavigate } from "react-router-dom";
import betHistoryLinks from "assets/data/betHistoryLinks";

function BetHistory({ states }) {
  const { setActiveMenu } = states;
  const navigate = useNavigate();

  return (
    <div className="">
      <ProfileCardsHeader
        pageName="Bet History"
        onClick={() => setActiveMenu("main")}
      />
      <div className="space-y-[2px] rounded overflow-hidden">
        {betHistoryLinks.map((item, index) => (
          <ProfileCard
            title={item.title}
            iconBg={item.color}
            Icon={item.Icon}
            onClick={() => navigate(item.relativeLink)}
          />
        ))}
      </div>
    </div>
  );
}

export default BetHistory;
