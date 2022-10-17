import { MdAccountBalance } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GiExtraTime, GiJourney } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";

const betHistoryLinks = [
  {
    title: "All",
    absoluteLink: "all",
    relativeLink: "bet-history/all",
    target: "_self",
    Icon: () => <HiUserCircle />,
    count: 0,
    color: "#8b928b",
  },
  {
    title: "Open Bets",
    absoluteLink: "open-bets",
    relativeLink: "bet-history/open-bets",
    target: "_self",
    Icon: () => <FaHistory />,
    count: 0,
    color: "#8b928b",
  },
  {
    title: "Cashed Out",
    absoluteLink: "cashed-out",
    relativeLink: "bet-history/cashed-out",
    target: "_self",
    Icon: () => <MdAccountBalance />,
    count: 0,
    color: "#8b928b",
  },
  {
    title: "Won",
    absoluteLink: "won",
    relativeLink: "bet-history/won",
    target: "_self",
    Icon: () => <GiExtraTime />,
    count: 0,
    color: "#8b928b",
  },
  {
    title: "Lost",
    absoluteLink: "lost",
    relativeLink: "bet-history/lost",
    target: "_self",
    Icon: () => <GiJourney />,
    count: 0,
    color: "#8b928b",
  },
  {
    title: "Returned",
    absoluteLink: "returned",
    relativeLink: "bet-history/returned",
    target: "_self",
    Icon: () => <IoMdMail />,
    count: 0,
    color: "#8b928b",
  },
  {
    title: "Won/Return",
    absoluteLink: "won-return",
    relativeLink: "bet-history/won-return",
    target: "_self",
    Icon: () => <IoMdMail />,
    count: 0,
    color: "#8b928b",
  },
  {
    title: "Lost/Return",
    absoluteLink: "lost-return",
    relativeLink: "bet-history/lost-return",
    target: "_self",
    Icon: () => <IoMdMail />,
    count: 0,
    color: "#8b928b",
  },
];

export default betHistoryLinks;
