import BottomBarLink from "components/BottomBarLink";
import { FiMenu } from "react-icons/fi";

function BottomBar() {
  return (
    <div className="fix-lag fixed left-0 bg-[rgba(0,12,36,.9)] border-t-1px border-white-2 bottom-0 w-full h-mobile-header-main-section-height z-[100] backdrop-blur-[3px] flex items-center">
      <BottomBarLink title="Live" />
      <BottomBarLink title="Sports" />
      <BottomBarLink title="Casino" />
      <BottomBarLink
        isButton={true}
        title="Menu"
        icon={<FiMenu className="text-2xl" style={{ filter: "invert(.5)" }} />}
      />
    </div>
  );
}

export default BottomBar;
