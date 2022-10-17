import ProfileCardsHeader from "components/ProfileCardsHeader";
import ProfileCard from "components/ProfileCard";
import { MdAccountBalance } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GiExtraTime, GiJourney } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";

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
        <ProfileCard
          title="All"
          iconBg="#8b928b"
          Icon={() => <HiUserCircle />}
          onClick={() => navigate("bet-history/all")}
        />
        <ProfileCard
          title="Open Bets"
          iconBg="#8b928b"
          Icon={() => <FaHistory />}
          onClick={() => navigate("bet-history/open-bets")}
        />
        <ProfileCard
          title="Cashed Out"
          iconBg="#8b928b"
          Icon={() => <MdAccountBalance />}
          onClick={() => navigate("bet-history/cashed-out")}
        />
        <ProfileCard
          title="Won"
          iconBg="#8b928b"
          Icon={() => <GiExtraTime />}
          onClick={() => navigate("bet-history/won")}
        />
        <ProfileCard
          title="Lost"
          iconBg="#8b928b"
          Icon={() => <GiJourney />}
          onClick={() => navigate("bet-history/lost")}
        />
        <ProfileCard
          title="Returned"
          iconBg="#8b928b"
          Icon={() => <IoMdMail />}
          onClick={() => navigate("bet-history/returned")}
        />
        <ProfileCard
          title="Won/Return"
          iconBg="#8b928b"
          Icon={() => <IoMdMail />}
          onClick={() => navigate("bet-history/won-return")}
        />
        <ProfileCard
          title="Lost/Return"
          iconBg="#8b928b"
          Icon={() => <IoMdMail />}
          onClick={() => navigate("bet-history/lost-return")}
        />
      </div>
    </div>
  );
}

export default BetHistory;
