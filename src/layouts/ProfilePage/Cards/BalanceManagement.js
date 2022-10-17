import ProfileCardsHeader from "components/ProfileCardsHeader";
import ProfileCard from "components/ProfileCard";
import { useNavigate } from "react-router-dom";
import balanceManagementLinks from "assets/data/balanceManagementLinks";

function BalanceManagement({ states }) {
  const { setActiveMenu } = states;
  const navigate = useNavigate();

  return (
    <div className="">
      <ProfileCardsHeader
        pageName="Balance Managment"
        onClick={() => setActiveMenu("main")}
      />
      <div className="space-y-[2px] rounded overflow-hidden">
        {balanceManagementLinks.map((item, index) => (
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

export default BalanceManagement;
