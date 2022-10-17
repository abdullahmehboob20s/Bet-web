import { HiUserCircle } from "react-icons/hi";

const bonusesNavbarLinks = [
  {
    title: "Sport Bonus",
    relativeLink: "bonuses/sport-bonus",
    absoluteLink: "sport-bonus",
    target: "_self",
    color: "#8b928b",
    Icon: () => <HiUserCircle />,
    count: 0,
  },
  {
    title: "Casino Bonus",
    relativeLink: "bonuses/casino-bonus",
    absoluteLink: "casino-bonus",
    target: "_self",
    color: "#8b928b",
    Icon: () => <HiUserCircle />,
    count: 1,
  },
  {
    title: "Casino Free Spins",
    relativeLink: "bonuses/casino-free-spins",
    absoluteLink: "casino-free-spins",
    target: "_self",
    color: "#8b928b",
    Icon: () => <HiUserCircle />,
    count: 0,
  },
  {
    title: "Bonus History",
    relativeLink: "bonuses/bonus-history",
    absoluteLink: "bonus-history",
    target: "_self",
    color: "#8b928b",
    Icon: () => <HiUserCircle />,
    count: 0,
  },
  {
    title: "Refer a friend",
    relativeLink: "bonuses/refer-a-friend",
    absoluteLink: "refer-a-friend",
    target: "_self",
    color: "#8b928b",
    Icon: () => <HiUserCircle />,
    count: 0,
  },
  {
    title: "Promo code",
    relativeLink: "bonuses/promo-code",
    absoluteLink: "promo-code",
    target: "_self",
    color: "#8b928b",
    Icon: () => <HiUserCircle />,
    count: 0,
  },
];

export default bonusesNavbarLinks;
