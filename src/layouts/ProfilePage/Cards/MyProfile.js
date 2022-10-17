import ProfileCardsHeader from "components/ProfileCardsHeader";
import ProfileCard from "components/ProfileCard";
import { useNavigate } from "react-router-dom";
import myProfileLinks from "assets/data/myprofil-links-data";

function MyProfile({ states }) {
  const { setActiveMenu } = states;
  const navigate = useNavigate();

  return (
    <div className="">
      <ProfileCardsHeader
        pageName="My Profile"
        onClick={() => setActiveMenu("main")}
      />
      <div className="space-y-[2px] rounded overflow-hidden">
        {myProfileLinks.map((item, index) => (
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

export default MyProfile;
