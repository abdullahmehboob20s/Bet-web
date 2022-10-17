import Layout from "layouts/Layout";
import CloseModalBtn from "components/CloseModalBtn";
import MyProfileLinksComponent from "components/MyProfileLinksComponent";
import { Outlet } from "react-router-dom";
import NavbarHeaderWithBackButton from "components/NavbarHeaderWithBackButton";
import myProfileLinks from "assets/data/myprofil-links-data";

function MyProfilePageOutlet() {
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
            pageName="MY PROFILE"
            linksdata={myProfileLinks}
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

export default MyProfilePageOutlet;
