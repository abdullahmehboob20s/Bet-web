import CrossButton from "./CrossButton";
import ProfileCard from "./ProfileCard";
import { HiUserCircle } from "react-icons/hi";
import { FaHistory } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { GiExtraTime, GiJourney } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import Drawer from "./Drawer";
import { useDispatch } from "react-redux";
import { toggleBottomMenuModalOpen } from "redux/bottomMenuModalState";

function BottomMenuModal({ drawerClassName, className }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,.8)] z-[200] ${className}`}
    >
      <Drawer
        title="MENU"
        className={drawerClassName}
        HeaderRightComponent={() => (
          <CrossButton
            onClick={() => dispatch(toggleBottomMenuModalOpen(false))}
          />
        )}
      >
        <div className="px-4 pt-4 pb-[calc(var(--mobile-header-navigation-height)+10px)]">
          <div className="mb-7">
            <p className="text-xs text-white-7 mb-4">PROMO</p>
            <div className="space-y-2">
              <ProfileCard
                bg="bg-white-1"
                title="Promotions"
                iconBg="#8b928b"
                Icon={() => <HiUserCircle />}
                showArrow={false}
              />
              <ProfileCard
                bg="bg-white-1"
                title="Tournaments"
                iconBg="#9ce8bb"
                Icon={() => <FaHistory />}
              />
            </div>
          </div>
          <div className="mb-7">
            <p className="text-xs text-white-7 mb-4">SPORTS</p>
            <div className="space-y-2">
              <ProfileCard
                showArrow={false}
                bg="bg-white-1"
                title="Live"
                iconBg="#8b928b"
                Icon={() => <HiUserCircle />}
              />
              <ProfileCard
                showArrow={false}
                bg="bg-white-1"
                title="Sports"
                iconBg="#9ce8bb"
                Icon={() => <FaHistory />}
              />
              <ProfileCard
                showArrow={false}
                bg="bg-white-1"
                title="Pinnacle"
                iconBg="#38b838"
                Icon={() => <MdAccountBalance />}
              />
              <ProfileCard
                showArrow={false}
                bg="bg-white-1"
                title="Esports"
                iconBg="#f7ff2b"
                Icon={() => <GiExtraTime />}
              />
              <ProfileCard
                bg="bg-white-1"
                title="Virtual Sports"
                iconBg="#ba6e46"
                Icon={() => <GiJourney />}
              />
            </div>
          </div>
          <div className="mb-7">
            <p className="text-xs text-white-7 mb-4">CASINO</p>
            <div className="space-y-2">
              <ProfileCard
                bg="bg-white-1"
                title="My Profile"
                iconBg="#8b928b"
                Icon={() => <HiUserCircle />}
              />
              <ProfileCard
                bg="bg-white-1"
                title="Bet History"
                iconBg="#9ce8bb"
                Icon={() => <FaHistory />}
              />
              <ProfileCard
                bg="bg-white-1"
                title="Balance Managment"
                iconBg="#38b838"
                Icon={() => <MdAccountBalance />}
              />
              <ProfileCard
                bg="bg-white-1"
                count={1}
                title="Bonuses"
                iconBg="#f7ff2b"
                Icon={() => <GiExtraTime />}
              />
              <ProfileCard
                bg="bg-white-1"
                title="Bonuse Journey"
                iconBg="#ba6e46"
                Icon={() => <GiJourney />}
              />
              <ProfileCard
                bg="bg-white-1"
                title="Messages"
                iconBg="#5280dc"
                Icon={() => <IoMdMail />}
              />
            </div>
          </div>
          <div className="mb-7">
            <p className="text-xs text-white-7 mb-4">OTHER</p>
            <div className="space-y-2">
              <ProfileCard
                bg="bg-white-1"
                title="My Profile"
                iconBg="#8b928b"
                Icon={() => <HiUserCircle />}
              />
              <ProfileCard
                bg="bg-white-1"
                title="Bet History"
                iconBg="#9ce8bb"
                Icon={() => <FaHistory />}
              />
              <ProfileCard
                bg="bg-white-1"
                title="Balance Managment"
                iconBg="#38b838"
                Icon={() => <MdAccountBalance />}
              />
              <ProfileCard
                bg="bg-white-1"
                count={1}
                title="Bonuses"
                iconBg="#f7ff2b"
                Icon={() => <GiExtraTime />}
              />
              <ProfileCard
                bg="bg-white-1"
                title="Bonuse Journey"
                iconBg="#ba6e46"
                Icon={() => <GiJourney />}
              />
              <ProfileCard
                bg="bg-white-1"
                title="Messages"
                iconBg="#5280dc"
                Icon={() => <IoMdMail />}
              />
            </div>
          </div>
        </div>
      </Drawer>

      <div className="absolute bottom-[var(--mobile-header-main-section-height)] left-0 w-full h-[calc(var(--mobile-header-main-section-height)+4rem)] pointer-events-none bg-gradient-to-b from-transparent to-b"></div>
    </div>
  );
}

export default BottomMenuModal;
