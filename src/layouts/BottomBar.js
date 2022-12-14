import BottomBarLink from "components/BottomBarLink";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleBottomMenuModalOpen } from "redux/bottomMenuModalState";
import ReactDOM from "react-dom";

function BottomBar() {
  const dispatch = useDispatch();
  const { bottomMenuModalOpen } = useSelector(
    (state) => state.bottomMenuModalState
  );

  return ReactDOM.createPortal(
    <div className="fix-lag fixed left-0 bg-[rgba(0,12,36,.9)] border-t-1px border-white-2 bottom-0 w-full h-mobile-header-main-section-height z-[400] backdrop-blur-[3px] flex items-center">
      <BottomBarLink to="/live" title="Live" />
      <BottomBarLink to="/sports" title="Sports" />
      <BottomBarLink to="/casino" title="Casino" />
      <BottomBarLink
        isButton={true}
        title="Menu"
        icon={<FiMenu className="text-2xl" style={{ filter: "invert(.5)" }} />}
        onClick={() =>
          dispatch(toggleBottomMenuModalOpen(!bottomMenuModalOpen))
        }
      />
    </div>,
    document.getElementById("modals")
  );
}

export default BottomBar;
