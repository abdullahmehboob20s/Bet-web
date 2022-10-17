import ProfileCardsHeader from "components/ProfileCardsHeader";
import ProfileCard from "components/ProfileCard";
import { MdAccountBalance } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GiExtraTime, GiJourney } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function MyProfile({ states }) {
  const { setActiveMenu } = states;
  const navigate = useNavigate();

  return (
    <div className="">
      <ProfileCardsHeader
        pageName="My Profile"
        onClick={() => setActiveMenu("main")}
      />
      <div className="space-y-[2px] rounded overflow-hidden">
        <ProfileCard
          title="Personal Details"
          iconBg="#8b928b"
          Icon={() => <HiUserCircle />}
          onClick={() => navigate("my-profile/personal-details")}
        />
        <ProfileCard
          title="Change Password"
          iconBg="#8b928b"
          Icon={() => <FaHistory />}
          onClick={() => navigate("my-profile/change-password")}
        />
        <ProfileCard
          title="Verify Account"
          iconBg="#8b928b"
          Icon={() => <MdAccountBalance />}
          onClick={() => navigate("my-profile/verify-account")}
        />
        <ProfileCard
          title="Time-Out"
          iconBg="#8b928b"
          Icon={() => <GiExtraTime />}
          onClick={() => navigate("my-profile/time-out")}
        />
        <ProfileCard
          title="Authentication"
          iconBg="#8b928b"
          Icon={() => <GiJourney />}
          onClick={() => navigate("my-profile/authentication")}
        />
      </div>
    </div>
  );
}

export default MyProfile;
