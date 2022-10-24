import MatchCards from "components/MatchCards";
import NavbarHeaderWithBackButton from "components/NavbarHeaderWithBackButton";
import Layout from "layouts/Layout";
import ScoreCard from "layouts/MatchPage/ScoreCard";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const NavbarDropdown = () => {
  return (
    <div>
      <button className="w-6 h-6 flex items-center justify-center bg-white-1 rounded text-base">
        <IoIosArrowDown className="fill-white-8" />
      </button>
    </div>
  );
};

function MatchPage() {
  return (
    <Layout
      navbarProps={{
        Component: () => (
          <NavbarHeaderWithBackButton
            backTo={-1}
            pageName="Primera A"
            TopBarRightComponent={NavbarDropdown}
          />
        ),
      }}
    >
      <div className="pt-[calc(var(--mobile-header-navigation-height)+.4rem)] pb-10">
        <div className="mb-4">
          <ScoreCard />
        </div>

        <MatchCards />
      </div>
    </Layout>
  );
}

export default MatchPage;
