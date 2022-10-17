import Layout from "layouts/Layout";
import CloseModalBtn from "components/CloseModalBtn";
import { Outlet } from "react-router-dom";
import BalanceManagementLinks from "components/BalanceManagementLinks";

function BalanceManagementOutlet() {
  return (
    <Layout
      showFooter={false}
      showBottomBar={false}
      navbarProps={{
        showDropdown: false,
        showSignInButton: false,
        showRegisterButton: false,
        NavbarRightComponent: () => <CloseModalBtn to="/" />,
        Component: BalanceManagementLinks,
      }}
    >
      <div className="pt-[calc(var(--mobile-header-navigation-height)*2+1rem)]">
        <Outlet />
      </div>
    </Layout>
  );
}

export default BalanceManagementOutlet;
