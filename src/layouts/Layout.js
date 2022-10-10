import React from "react";
import BottomBar from "./BottomBar";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children, navbarProps }) {
  return (
    <div className="pb-mobile-header-main-section-height">
      <Navbar {...navbarProps} />
      <div className="mt-mobile-header-full-height">
        {children}
        <Footer />
      </div>
      <BottomBar />
    </div>
  );
}

export default Layout;
