import ProfileCardsHeader from "components/ProfileCardsHeader";
import ProfileCard from "components/ProfileCard";
import { MdAccountBalance } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GiExtraTime, GiJourney } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";

function Messages({ states }) {
  const { activeMenu, setActiveMenu } = states;

  return (
    <div className="">
      <ProfileCardsHeader
        pageName="Messages"
        onClick={() => setActiveMenu("main")}
      />
      <div className="space-y-[2px] rounded overflow-hidden">
        <ProfileCard
          title="Inbox"
          iconBg="#8b928b"
          Icon={() => <HiUserCircle />}
          onClick={() => setActiveMenu("My Profile")}
        />
      </div>
    </div>
  );
}

export default Messages;
