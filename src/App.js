import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "pages/HomePage";
import EventView from "pages/Live/EventView";
import Sports from "pages/Sports";
import Casino from "pages/Casino/Casino";
import Home from "pages/Casino/Home";
import PrivacyPolicy from "pages/PrivacyPolicy";
import FAQ from "pages/FAQ";
import ResultsPage from "pages/ResultsPage";
import ProfilePage from "pages/ProfilePage";
import Affiliates from "pages/Affiliates";
import AboutUs from "pages/AboutUs";
import ScrollToTop from "components/ScrollToTop";
import MyProfilePage from "pages/MyProfilePage";
import ProfilePageOutlet from "Outlets/ProfilePageOutlet";
import MyProfilePageOutlet from "Outlets/MyProfilePageOutlet";
import ChangePassword from "pages/ChangePassword";
import VerifyAccount from "pages/VerifyAccount";
import TimeOut from "pages/TimeOut";
import Authentication from "pages/Authentication";
import All from "pages/BetHistory.js/All";
import BetHistoryOutlets from "Outlets/BetHistoryOutlets";
import BalanceManagementOutlet from "Outlets/BalanceManagementOutlet";
import Deposit from "pages/BalanceManagement/Deposit";
import Withdraw from "pages/BalanceManagement/Withdraw";
import TransactionHistory from "pages/BalanceManagement/TransactionHistory";
import WithdrawStatus from "pages/BalanceManagement/WithdrawStatus";
import BonusesOutlet from "Outlets/BonusesOutlet";
import SportBonus from "pages/Bonuses/SportBonus";
import CasinoBonus from "pages/Bonuses/CasinoBonus";
import CasinoFreeSpin from "pages/Bonuses/CasinoFreeSpin";
import BonusHistory from "pages/Bonuses/BonusHistory";
import ReferAFriend from "pages/Bonuses/ReferAFriend";
import PromoCode from "pages/Bonuses/PromoCode";
import BonusJourney from "pages/Bonuses/BonusJourney";
import MessagesPage from "pages/Bonuses/MessagesPage";
import MatchPageOutlet from "Outlets/MatchPageOutlet";
import AllMatches from "pages/MatchPage/All";
import ModalPage from "layouts/ModalPage";
import ScrollHiderConditions from "components/ScrollHiderConditions";

function App() {
  console.log("re rendering");

  return (
    <>
      <ScrollHiderConditions />
      <div>
        <ScrollToTop />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="affiliate" element={<Affiliates />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="sports" element={<Sports />} />
          <Route path="results" element={<ResultsPage />} />

          <Route path="match" element={<MatchPageOutlet />}>
            <Route index element={<AllMatches />} />
            <Route path="stared" element={<AllMatches />} />
            <Route path="match" element={<AllMatches />} />
            <Route path="tools" element={<AllMatches />} />
            <Route path="handicaps" element={<AllMatches />} />
          </Route>

          {/* ======================= */}
          <Route path="profile" element={<ProfilePageOutlet />}>
            <Route index element={<ProfilePage />} />
            <Route path="bonus-journey" element={<BonusJourney />} />
            <Route path="messages" element={<MessagesPage />} />

            {/*  */}
            <Route path="my-profile" element={<MyProfilePageOutlet />}>
              <Route
                index
                path="personal-details"
                element={<MyProfilePage />}
              />
              <Route path="change-password" element={<ChangePassword />} />
              <Route path="verify-account" element={<VerifyAccount />} />
              <Route path="time-out" element={<TimeOut />} />
              <Route path="authentication" element={<Authentication />} />
            </Route>

            {/*  */}
            <Route path="bet-history" element={<BetHistoryOutlets />}>
              <Route path="all" element={<All />} />
              <Route path="open-bets" element={<All />} />
              <Route path="cashed-out" element={<All />} />
              <Route path="won" element={<All />} />
              <Route path="lost" element={<All />} />
              <Route path="returned" element={<All />} />
              <Route path="won-return" element={<All />} />
              <Route path="lost-return" element={<All />} />
            </Route>

            {/*  */}
            <Route
              path="balance-management"
              element={<BalanceManagementOutlet />}
            >
              <Route path="deposit" element={<Deposit />} />
              <Route path="withdraw" element={<Withdraw />} />
              <Route path="withdraw-status" element={<WithdrawStatus />} />
              <Route
                path="transaction-history"
                element={<TransactionHistory />}
              />
            </Route>

            <Route path="bonuses" element={<BonusesOutlet />}>
              <Route path="sport-bonus" element={<SportBonus />} />
              <Route path="casino-bonus" element={<CasinoBonus />} />
              <Route path="casino-free-spins" element={<CasinoFreeSpin />} />
              <Route path="bonus-history" element={<BonusHistory />} />
              <Route path="refer-a-friend" element={<ReferAFriend />} />
              <Route path="promo-code" element={<PromoCode />} />
            </Route>
          </Route>
          {/* ======================= */}

          <Route path="casino" element={<Casino />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="live" element={<EventView />} />
        </Routes>

        <ModalPage />
      </div>
    </>
  );
}

export default App;
