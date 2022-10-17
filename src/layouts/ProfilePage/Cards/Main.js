import ProfileCard from "components/ProfileCard";
import { MdAccountBalance } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GiExtraTime, GiJourney } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Main({ states }) {
  const { setActiveMenu } = states;
  const navigate = useNavigate();

  return (
    <div className="space-y-[2px] rounded overflow-hidden">
      <ProfileCard
        title="My Profile"
        iconBg="#8b928b"
        Icon={() => <HiUserCircle />}
        onClick={() => setActiveMenu("My Profile")}
      />
      <ProfileCard
        title="Bet History"
        iconBg="#9ce8bb"
        Icon={() => <FaHistory />}
        onClick={() => setActiveMenu("Bet History")}
      />
      <ProfileCard
        title="Balance Managment"
        iconBg="#38b838"
        Icon={() => <MdAccountBalance />}
        onClick={() => setActiveMenu("Balance Managment")}
      />
      <ProfileCard
        count={1}
        title="Bonuses"
        iconBg="#f7ff2b"
        Icon={() => <GiExtraTime />}
        onClick={() => setActiveMenu("Bonuses")}
      />
      <ProfileCard
        title="Bonuse Journey"
        iconBg="#ba6e46"
        Icon={() => <GiJourney />}
        onClick={() => navigate("bonus-journey")}
      />
      <ProfileCard
        title="Messages"
        iconBg="#5280dc"
        Icon={() => <IoMdMail />}
        onClick={() => setActiveMenu("Messages")}
      />
    </div>
  );
}

export default Main;
