import ReactDOM from "react-dom";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "pages/HomePage";
import Live from "pages/Live";
import EventView from "pages/Live/EventView";
import Sports from "pages/Sports";
import Casino from "pages/Casino/Casino";
import Home from "pages/Casino/Home";
import PrivacyPolicy from "pages/PrivacyPolicy";
import { useEffect } from "react";
import FAQ from "pages/FAQ";
import SignInModal from "layouts/SignInModal";
import { useSelector } from "react-redux";
import useDelayUnmount from "hooks/useDelayUnmount";
import RegisterModal from "layouts/RegisterModal";
import ResultsPage from "pages/ResultsPage";
import ProfilePage from "pages/ProfilePage";
import BottomMenuModal from "components/BottomMenuModal";
import Affiliates from "pages/Affiliates";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const { isOpen } = useSelector((state) => state.signInModalState);

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
      shouldbottomModalRender
    ) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [location.pathname, isRegisterModalOpen, isOpen, shouldbottomModalRender]);

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

      <div>
        <Routes location={background || location}>
          <Route index element={<HomePage />} />
          <Route path="affiliate" element={<Affiliates />} />
          <Route path="sports" element={<Sports />} />
          <Route path="results" element={<ResultsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="casino" element={<Casino />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="live" element={<Live />}>
            <Route index element={<EventView />} />
            <Route path="event-view" element={<EventView />} />
            <Route path="*" element={<Navigate to="event-view" replace />} />
          </Route>
        </Routes>

        {background && (
          <>
            <Routes>
              <Route path="faq" element={<FAQ />} />
            </Routes>
            <Routes>
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </>
        )}
      </div>
    </>
  );
}

export default App;
