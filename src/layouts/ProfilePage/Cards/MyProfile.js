import ProfileCardsHeader from "components/ProfileCardsHeader";
import ProfileCard from "components/ProfileCard";
import { MdAccountBalance } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { GiExtraTime, GiJourney } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";

function MyProfile({ states }) {
  const { setActiveMenu } = states;

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
        />
        <ProfileCard
          title="Change Password"
          iconBg="#8b928b"
          Icon={() => <FaHistory />}
        />
        <ProfileCard
          title="Verify Account"
          iconBg="#8b928b"
          Icon={() => <MdAccountBalance />}
        />
        <ProfileCard
          title="Time-Out"
          iconBg="#8b928b"
          Icon={() => <GiExtraTime />}
        />
        <ProfileCard
          title="Authentication"
          iconBg="#8b928b"
          Icon={() => <GiJourney />}
        />
      </div>
    </div>
  );
}

export default MyProfile;
