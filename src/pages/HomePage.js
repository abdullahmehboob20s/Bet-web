import NavbarLinks from "components/NavbarLinks";
import Banner from "layouts/Banner";
import CasinoGames from "layouts/CasinoGames";
import FeaturedGames from "layouts/FeaturedGames";
import Games from "layouts/Games";
import Jackpot from "layouts/Jackpot";
import Layout from "layouts/Layout";
import LiveCasino from "layouts/LiveCasino";
import Promotion from "layouts/Promotion";

function HomePage() {
  return (
    <Layout navbarProps={{ NavbarBottomContent: NavbarLinks }}>
      <div className="mb-10px pt-7px">
        <Banner />
      </div>
      <div className="mb-10px">
        <Jackpot />
      </div>
      <div className="mb-10px">
        <Promotion />
      </div>
      <div className="mb-10px">
        <FeaturedGames />
      </div>
      <div className="space-y-6 mb-6">
        <CasinoGames />
        <LiveCasino />
        <Games />
      </div>
    </Layout>
  );
}

export default HomePage;
