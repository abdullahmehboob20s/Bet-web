import useDelayUnmount from "hooks/useDelayUnmount";
import RegisterModal from "layouts/RegisterModal";
import SignInModal from "layouts/SignInModal";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import BackToTopButton from "./BackToTopButton";
import BottomMenuModal from "./BottomMenuModal";
import ReactDOM from "react-dom";
import StakeModal from "./StakeModal";

function ScrollHiderConditions() {
  const location = useLocation();
  const { isOpen } = useSelector((state) => state.signInModalState);

  const { stakeModalVisible } = useSelector(
    (state) => state.stakeModalVisibilityState
  );

  const { bottomMenuModalOpen } = useSelector(
    (state) => state.bottomMenuModalState
  );
  const shouldbottomModalRender = useDelayUnmount(bottomMenuModalOpen, 260);
  const { isRegisterModalOpen } = useSelector(
    (state) => state.registerModalState
  );
  const shouldSignModalRender = useDelayUnmount(isOpen, 300);
  const shouldRegisterModalRender = useDelayUnmount(isRegisterModalOpen, 300);

  useEffect(() => {
    if (
      location.pathname === "/privacy-policy" ||
      location.pathname === "/faq" ||
      isOpen ||
      isRegisterModalOpen ||
      shouldbottomModalRender ||
      stakeModalVisible
    ) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [
    location.pathname,
    isRegisterModalOpen,
    isOpen,
    shouldbottomModalRender,
    stakeModalVisible,
  ]);

  return (
    <>
      {shouldRegisterModalRender && (
        <RegisterModal
          className={isRegisterModalOpen ? "fade-in" : "fade-out"}
        />
      )}

      {shouldSignModalRender && (
        <SignInModal className={isOpen ? "fade-in" : "fade-out"} />
      )}

      {stakeModalVisible && <StakeModal />}

      {shouldbottomModalRender &&
        ReactDOM.createPortal(
          <BottomMenuModal
            className={bottomMenuModalOpen ? "fade-in" : "fade-out"}
            drawerClassName={
              bottomMenuModalOpen ? "drawer-fade-in" : "drawer-fade-out"
            }
          />,
          document.getElementById("modals")
        )}

      <BackToTopButton />
    </>
  );
}

export default ScrollHiderConditions;
