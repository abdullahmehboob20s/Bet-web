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

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const { isOpen } = useSelector((state) => state.signInModalState);
  const shouldSignModalRender = useDelayUnmount(isOpen, 1000);

  useEffect(() => {
    if (
      location.pathname === "/privacy-policy" ||
      location.pathname === "/faq" ||
      isOpen
    ) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [location.pathname, isOpen]);

  return (
    <div>
      {shouldSignModalRender && (
        <SignInModal className={isOpen ? "fade-in" : "fade-out"} />
      )}

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
  );
}

export default App;
