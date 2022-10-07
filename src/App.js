import Accordions from "layouts/Accordions";
import Banner from "layouts/Banner";
import CasinoGames from "layouts/CasinoGames";
import Dropdowns from "layouts/Dropdowns";
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
      <div className="mt-mobile-header-full-height">
        <div className="mb-10px">
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
        <div className="mb-5">
          <Dropdowns />
        </div>
        <Accordions />
      </div>
    </div>
  );
}

export default App;
