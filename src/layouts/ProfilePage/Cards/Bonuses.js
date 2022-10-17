import ProfileCardsHeader from "components/ProfileCardsHeader";
import ProfileCard from "components/ProfileCard";
import bonusesNavbarLinks from "assets/data/bonusesNavbarLinks";
import { useNavigate } from "react-router-dom";

function Bonuses({ states }) {
  const { setActiveMenu } = states;
  const navigate = useNavigate();

  return (
    <div className="">
      <ProfileCardsHeader
        pageName="Bonuses"
        onClick={() => setActiveMenu("main")}
      />
      <div className="space-y-[2px] rounded overflow-hidden">
        {bonusesNavbarLinks.map((item, index) => (
          <ProfileCard
            title={item.title}
            iconBg={item.color}
            count={item.count === 0 ? null : item.count}
            Icon={item.Icon}
            onClick={() => navigate(item.relativeLink)}
          />
        ))}
      </div>
    </div>
  );
}

export default Bonuses;
