import FAQ from "pages/FAQ";
import PrivacyPolicy from "pages/PrivacyPolicy";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

function ModalPage() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    background && (
      <>
        <Routes>
          <Route path="faq" element={<FAQ />} />
        </Routes>
        <Routes>
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </>
    )
  );
}

export default ModalPage;
