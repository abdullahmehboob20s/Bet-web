import Account from "components/Account";
import BalanceCard from "components/BalanceCard";
import ProfileCard from "components/ProfileCard";
import User from "components/User";
import Layout from "layouts/Layout";
import PromoCode from "layouts/ProfilePage/PromoCode";
import { FaHistory } from "react-icons/fa";
import { GiExtraTime, GiJourney } from "react-icons/gi";
import { HiUserCircle } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdAccountBalance } from "react-icons/md";
import { Link } from "react-router-dom";

const CloseModalBtn = () => {
  return (
    <Link to="/" className="flex text-2xl">
      <IoClose className="fill-white-6" />
    </Link>
  );
};

function ProfilePage() {
  return (
    <Layout
      showFooter={false}
      showBottomBar={false}
      navbarProps={{
        showDropdown: false,
        showSignInButton: false,
        showRegisterButton: false,
        NavbarRightComponent: CloseModalBtn,
      }}
    >
      <div className="pt-3">
        <div className="container-wrapper mb-5">
          <BalanceCard />
        </div>

        <div className="mb-4">
          <User />
        </div>

        <div className="mb-4">
          <Account />
        </div>

        <div className="container-wrapper space-y-1 mb-5">
          <ProfileCard
            title="My Profile"
            iconBg="#8b928b"
            Icon={() => <HiUserCircle />}
          />
          <ProfileCard
            title="Bet History"
            iconBg="#9ce8bb"
            Icon={() => <FaHistory />}
          />
          <ProfileCard
            title="Balance Managment"
            iconBg="#38b838"
            Icon={() => <MdAccountBalance />}
          />
          <ProfileCard
            count={1}
            title="Bonuses"
            iconBg="#f7ff2b"
            Icon={() => <GiExtraTime />}
          />
          <ProfileCard
            title="Bonuse Journey"
            iconBg="#ba6e46"
            Icon={() => <GiJourney />}
          />
          <ProfileCard
            title="Messages"
            iconBg="#5280dc"
            Icon={() => <IoMdMail />}
          />
        </div>

        <div className="container-wrapper mb-4">
          <PromoCode />
        </div>

        <div className="container-wrapper mb-4">
          <button className="bg-white-05 text-white-7 h-[36px] rounded w-full text-center px-5 text-xs font-medium">
            LOGOUT
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default ProfilePage;
