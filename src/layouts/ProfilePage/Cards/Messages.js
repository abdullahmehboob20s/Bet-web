import ProfileCardsHeader from "components/ProfileCardsHeader";
import ProfileCard from "components/ProfileCard";
import { HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Messages({ states }) {
  const { setActiveMenu } = states;
  const navigate = useNavigate();

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
          onClick={() => navigate("messages")}
        />
      </div>
    </div>
  );
}

export default Messages;
