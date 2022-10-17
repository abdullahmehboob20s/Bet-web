import Layout from "layouts/Layout";
import CloseModalBtn from "components/CloseModalBtn";
import MyProfileLinksComponent from "components/MyProfileLinksComponent";
import { Outlet } from "react-router-dom";

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
        Component: MyProfileLinksComponent,
      }}
    >
      <div className="pt-[calc(var(--mobile-header-navigation-height)*2+1rem)]">
        <Outlet />
      </div>
    </Layout>
  );
}

export default MyProfilePageOutlet;
