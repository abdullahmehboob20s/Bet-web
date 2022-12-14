import React from "react";
import BottomBar from "./BottomBar";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({
  children,
  navbarProps,
  showFooter = true,
  showBottomBar = true,
  layoutClassName = `${
    navbarProps?.NavbarBottomContent
      ? "mt-mobile-header-full-height"
      : "mt-mobile-header-main-section-height"
  }`,
}) {
  return (
    <div className={showBottomBar && "pb-mobile-header-main-section-height"}>
      <Navbar {...navbarProps} />
      <div className={layoutClassName}>
        {children}
        {showFooter && <Footer />}
      </div>

      {showBottomBar && <BottomBar />}
    </div>
  );
}

export default Layout;
