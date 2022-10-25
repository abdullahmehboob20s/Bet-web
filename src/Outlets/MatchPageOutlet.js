import MatchNavbarDropdown from "components/MatchNavbarDropdown";
import NavbarHeaderWithBackButton from "components/NavbarHeaderWithBackButton";
import Layout from "layouts/Layout";
import ScoreCard from "layouts/MatchPage/ScoreCard";
import TabLinks from "layouts/MatchPage/TabLinks";
import React from "react";
import { Outlet } from "react-router-dom";

function MatchPageOutlet() {
  return (
    <Layout
      navbarProps={{
        Component: () => (
          <NavbarHeaderWithBackButton
            backTo={"/live"}
            pageName="Primera A"
            TopBarRightComponent={MatchNavbarDropdown}
          />
        ),
      }}
    >
      <div className="pt-[calc(var(--mobile-header-navigation-height)+.4rem)] pb-10">
        <div className="mb-4">
          <ScoreCard />
        </div>

        <div className="mb-4">
          <TabLinks />
        </div>

        <Outlet />
      </div>
    </Layout>
  );
}

export default MatchPageOutlet;
