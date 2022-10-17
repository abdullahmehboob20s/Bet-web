import Layout from "layouts/Layout";
import CloseModalBtn from "components/CloseModalBtn";
import TabButton from "components/TabButton";
import BonusJourneyCard from "components/BonusJourneyCard";
import NavbarHeaderWithBackButton from "components/NavbarHeaderWithBackButton";

function BonusJourney() {
  return (
    <Layout
      showFooter={false}
      showBottomBar={false}
      navbarProps={{
        showDropdown: false,
        showSignInButton: false,
        showRegisterButton: false,
        NavbarRightComponent: () => <CloseModalBtn to={-1} />,
        Component: () => (
          <NavbarHeaderWithBackButton pageName="BONUS JOURNEY" />
        ),
      }}
    >
      <div className="pt-[calc(var(--mobile-header-navigation-height)+.6rem)] pb-6">
        <div className="container-wrapper px-4">
          <div className="h-[34px] rounded overflow-hidden mb-4">
            <TabButton title="Journey 1" active={true} />
          </div>

          <div className="mb-4">
            <p className="text-13px text-white font-bold mb-1">3BALL BONUS</p>
            <p className="text-xs text-white-6 font-medium">
              Place Live bets on Football, Basketball or Tennis and get Free
              Bets x3 a day
            </p>
          </div>

          <div className="space-y-3">
            <BonusJourneyCard />
            <BonusJourneyCard />
            <BonusJourneyCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BonusJourney;
