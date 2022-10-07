import Accordions from "layouts/Accordions";
import Banner from "layouts/Banner";
import CasinoGames from "layouts/CasinoGames";
import Contact from "layouts/Contact";
import Dropdowns from "layouts/Dropdowns";
import FeaturedGames from "layouts/FeaturedGames";
import Games from "layouts/Games";
import Jackpot from "layouts/Jackpot";
import LiveCasino from "layouts/LiveCasino";
import Navbar from "layouts/Navbar";
import Partners from "layouts/Partners";
import Promotion from "layouts/Promotion";

function App() {
  return (
    <div className="pb-mobile-header-main-section-height">
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
        <div className="mb-6">
          <Accordions />
        </div>
        <div className="mb-6">
          <Contact />
        </div>
        <div className="mb-3">
          <Partners />
        </div>

        <p className="text-center text-white-4 text-xs font-medium mb-3">
          © 2003 - 2022 VBET
        </p>
      </div>
    </div>
  );
}

export default App;
