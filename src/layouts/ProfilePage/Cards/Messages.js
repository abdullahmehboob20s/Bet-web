import ProfileCardsHeader from "components/ProfileCardsHeader";
import ProfileCard from "components/ProfileCard";
import { HiUserCircle } from "react-icons/hi";

function Messages({ states }) {
  const { setActiveMenu } = states;

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
