import ProfileCardsHeader from "components/ProfileCardsHeader";
import ProfileCard from "components/ProfileCard";
import { MdAccountBalance } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GiExtraTime } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

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
        <ProfileCard
          title="Deposit"
          iconBg="#8b928b"
          Icon={() => <HiUserCircle />}
          onClick={() => navigate("balance-management/deposit?group=all")}
        />
        <ProfileCard
          title="Withdraw"
          iconBg="#8b928b"
          Icon={() => <FaHistory />}
          onClick={() => navigate("balance-management/withdraw?group=all")}
        />
        <ProfileCard
          title="Transaction History"
          iconBg="#8b928b"
          Icon={() => <MdAccountBalance />}
          onClick={() => navigate("balance-management/transaction-history")}
        />
        <ProfileCard
          title="Withdraw Status"
          iconBg="#8b928b"
          Icon={() => <GiExtraTime />}
          onClick={() => navigate("balance-management/withdraw-status")}
        />
      </div>
    </div>
  );
}

export default BalanceManagement;
