import ProfileCardsHeader from "components/ProfileCardsHeader";
import ProfileCard from "components/ProfileCard";
import { MdAccountBalance } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GiExtraTime, GiJourney } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";

function Bonuses({ states }) {
  const { activeMenu, setActiveMenu } = states;

  return (
    <div className="">
      <ProfileCardsHeader
        pageName="Bonuses"
        onClick={() => setActiveMenu("main")}
      />
      <div className="space-y-[2px] rounded overflow-hidden">
        <ProfileCard
          title="Sport Bonus"
          iconBg="#8b928b"
          Icon={() => <HiUserCircle />}
          onClick={() => setActiveMenu("My Profile")}
        />
        <ProfileCard
          count={1}
          title="Casino Bonus"
          iconBg="#8b928b"
          Icon={() => <FaHistory />}
          onClick={() => setActiveMenu("Bet History")}
        />
        <ProfileCard
          title="Casino Free Spins"
          iconBg="#8b928b"
          Icon={() => <MdAccountBalance />}
        />
        <ProfileCard
          title="Bonus History"
          iconBg="#8b928b"
          Icon={() => <GiExtraTime />}
        />
        <ProfileCard
          title="Refer a friend"
          iconBg="#8b928b"
          Icon={() => <GiExtraTime />}
        />
        <ProfileCard
          title="Promo code"
          iconBg="#8b928b"
          Icon={() => <GiExtraTime />}
        />
      </div>
    </div>
  );
}

export default Bonuses;
