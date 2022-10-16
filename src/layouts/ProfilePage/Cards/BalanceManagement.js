import ProfileCardsHeader from "components/ProfileCardsHeader";
import ProfileCard from "components/ProfileCard";
import { MdAccountBalance } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GiExtraTime, GiJourney } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";

function BalanceManagement({ states }) {
  const { activeMenu, setActiveMenu } = states;

  return (
    <div className="">
      <ProfileCardsHeader
        pageName="Balance Managment"
        onClick={() => setActiveMenu("main")}
      />
      <div className="space-y-[2px] rounded overflow-hidden">
        <ProfileCard
          title="Deposit"
          iconBg="#8b928b"
          Icon={() => <HiUserCircle />}
          onClick={() => setActiveMenu("My Profile")}
        />
        <ProfileCard
          title="Withdraw"
          iconBg="#8b928b"
          Icon={() => <FaHistory />}
          onClick={() => setActiveMenu("Bet History")}
        />
        <ProfileCard
          title="Transaction History"
          iconBg="#8b928b"
          Icon={() => <MdAccountBalance />}
        />
        <ProfileCard
          title="Withdraw Status"
          iconBg="#8b928b"
          Icon={() => <GiExtraTime />}
        />
      </div>
    </div>
  );
}

export default BalanceManagement;
