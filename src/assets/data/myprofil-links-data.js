import { MdAccountBalance } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GiExtraTime, GiJourney } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";

const myProfileLinks = [
  {
    title: "Personal Details",
    absoluteLink: "personal-details",
    relativeLink: "my-profile/personal-details",
    target: "_self",
    Icon: () => <HiUserCircle />,
    count: 0,
    color: "#8b928b",
  },
  {
    title: "Change Password",
    absoluteLink: "change-password",
    relativeLink: "my-profile/change-password",
    target: "_self",
    Icon: () => <FaHistory />,
    count: 0,
    color: "#8b928b",
  },
  {
    title: "Verify Account",
    absoluteLink: "verify-account",
    relativeLink: "my-profile/verify-account",
    target: "_self",
    Icon: () => <MdAccountBalance />,
    count: 0,
    color: "#8b928b",
  },
  {
    title: "Time-Out",
    absoluteLink: "time-out",
    relativeLink: "my-profile/time-out",
    target: "_self",
    Icon: () => <GiExtraTime />,
    count: 0,
    color: "#8b928b",
  },
  {
    title: "Authentication",
    absoluteLink: "authentication",
    relativeLink: "my-profile/authentication",
    target: "_self",
    Icon: () => <GiJourney />,
    count: 0,
    color: "#8b928b",
  },
];

export default myProfileLinks;
