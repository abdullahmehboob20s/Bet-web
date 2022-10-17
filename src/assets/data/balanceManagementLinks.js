import { MdAccountBalance } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GiExtraTime } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";

const balanceManagementLinks = [
  {
    title: "Deposit",
    absoluteLink: "deposit?group=all",
    relativeLink: "balance-management/deposit?group=all",
    target: "_self",
    Icon: () => <HiUserCircle />,
    count: 0,
    color: "#8b928b",
  },
  {
    title: "Withdraw",
    absoluteLink: "withdraw?group=all",
    relativeLink: "balance-management/withdraw?group=all",
    target: "_self",
    Icon: () => <FaHistory />,
    count: 0,
    color: "#8b928b",
  },
  {
    title: "Transaction History",
    absoluteLink: "transaction-history",
    relativeLink: "balance-management/transaction-history",
    target: "_self",
    Icon: () => <MdAccountBalance />,
    count: 0,
    color: "#8b928b",
  },
  {
    title: "Withdraw Status",
    absoluteLink: "withdraw-status",
    relativeLink: "balance-management/withdraw-status",
    target: "_self",
    Icon: () => <GiExtraTime />,
    count: 0,
    color: "#8b928b",
  },
];

export default balanceManagementLinks;
