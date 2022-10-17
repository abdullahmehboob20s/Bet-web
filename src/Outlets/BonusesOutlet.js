import Layout from "layouts/Layout";
import CloseModalBtn from "components/CloseModalBtn";
import { Outlet } from "react-router-dom";
import NavbarHeaderWithBackButton from "components/NavbarHeaderWithBackButton";
import bonusesNavbarLinks from "assets/data/bonusesNavbarLinks";

function BonusesOutlet() {
  return (
    <Layout
      showFooter={false}
      showBottomBar={false}
      navbarProps={{
        showDropdown: false,
        showSignInButton: false,
        showRegisterButton: false,
        NavbarRightComponent: () => <CloseModalBtn to="/" />,
        Component: () => (
          <NavbarHeaderWithBackButton
            pageName="BONUSES"
            linksdata={bonusesNavbarLinks}
          />
        ),
      }}
    >
      <div className="pt-[calc(var(--mobile-header-navigation-height)*2+1rem)]">
        <Outlet />
      </div>
    </Layout>
  );
}

export default BonusesOutlet;
