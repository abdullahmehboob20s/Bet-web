import ProfileCardsHeader from "components/ProfileCardsHeader";
import ProfileCard from "components/ProfileCard";
import { MdAccountBalance } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GiExtraTime, GiJourney } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";

function BetHistory({ states }) {
  const { setActiveMenu } = states;

  return (
    <div className="">
      <ProfileCardsHeader
        pageName="Bet History"
        onClick={() => setActiveMenu("main")}
      />
      <div className="space-y-[2px] rounded overflow-hidden">
        <ProfileCard
          title="All"
          iconBg="#8b928b"
          Icon={() => <HiUserCircle />}
          onClick={() => setActiveMenu("My Profile")}
        />
        <ProfileCard
          title="Open Bets"
          iconBg="#8b928b"
          Icon={() => <FaHistory />}
          onClick={() => setActiveMenu("Bet History")}
        />
        <ProfileCard
          title="Cashed Out"
          iconBg="#8b928b"
          Icon={() => <MdAccountBalance />}
        />
        <ProfileCard
          title="Won"
          iconBg="#8b928b"
          Icon={() => <GiExtraTime />}
        />
        <ProfileCard title="Lost" iconBg="#8b928b" Icon={() => <GiJourney />} />
        <ProfileCard
          title="Returned"
          iconBg="#8b928b"
          Icon={() => <IoMdMail />}
        />
        <ProfileCard
          title="Won/Return"
          iconBg="#8b928b"
          Icon={() => <IoMdMail />}
        />
        <ProfileCard
          title="Lost/Return"
          iconBg="#8b928b"
          Icon={() => <IoMdMail />}
        />
      </div>
    </div>
  );
}

export default BetHistory;
