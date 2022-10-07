import Banner from "layouts/Banner";
import CasinoGames from "layouts/CasinoGames";
import FeaturedGames from "layouts/FeaturedGames";
import Games from "layouts/Games";
import Jackpot from "layouts/Jackpot";
import LiveCasino from "layouts/LiveCasino";
import Navbar from "layouts/Navbar";
import Promotion from "layouts/Promotion";

function App() {
  return (
    <div className="pb-20">
      <Navbar />
      <div className="mt-mobile-header-full-height space-y-10px">
        <Banner />
        <Jackpot />
        <Promotion />
        <FeaturedGames />
        <div className="space-y-6">
          <CasinoGames />
          <LiveCasino />
          <Games />
        </div>
      </div>
    </div>
  );
}

export default App;
