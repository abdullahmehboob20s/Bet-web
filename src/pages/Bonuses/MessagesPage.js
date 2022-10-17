import Layout from "layouts/Layout";
import CloseModalBtn from "components/CloseModalBtn";
import NavbarHeaderWithBackButton from "components/NavbarHeaderWithBackButton";

function MessagesPage() {
  return (
    <Layout
      showFooter={false}
      showBottomBar={false}
      navbarProps={{
        showDropdown: false,
        showSignInButton: false,
        showRegisterButton: false,
        NavbarRightComponent: () => <CloseModalBtn to={-1} />,
        Component: () => <NavbarHeaderWithBackButton pageName="MESSAGES" />,
      }}
    >
      <div className="pt-[calc(var(--mobile-header-navigation-height)+.6rem)] pb-6">
        <div className="container-wrapper py-6">
          <p className="text-xs text-center text-white-7 font-medium">
            You do not have any messages
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default MessagesPage;
