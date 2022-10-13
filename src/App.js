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

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const { isOpen } = useSelector((state) => state.signInModalState);
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
      isRegisterModalOpen
    ) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [location.pathname, isRegisterModalOpen, isOpen]);

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
      <div>
        <Routes location={background || location}>
          <Route index element={<HomePage />} />
          <Route path="sports" element={<Sports />} />
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
