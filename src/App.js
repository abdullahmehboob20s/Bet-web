import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "pages/HomePage";
import Live from "pages/Live";
import EventView from "pages/Live/EventView";
import Sports from "pages/Sports";
import Casino from "pages/Casino/Casino";
import Home from "pages/Casino/Home";
import PrivacyPolicy from "pages/PrivacyPolicy";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  useEffect(() => {
    if (location.pathname === "/privacy-policy") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [location.pathname]);

  return (
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
        <Routes>
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
