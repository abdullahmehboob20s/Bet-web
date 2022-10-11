import Banner from "layouts/Banner";
import GamesList from "layouts/CasinoPage/GamesList";
import ProviderSelector from "layouts/CasinoPage/ProviderSelector";
import SpecialGames from "layouts/CasinoPage/SpecialGames";
import CasinoSlot from "layouts/CasinoSlot";
import Jackpot from "layouts/Jackpot";

function Home() {
  return (
    <>
      <div className="mb-10px pt-7px">
        <Banner />
      </div>
      <div className="mb-6">
        <Jackpot />
      </div>
      <div className="mb-4">
        <SpecialGames />
      </div>
      <div className="mb-5">
        <GamesList />
      </div>
      <div className="mb-4">
        <ProviderSelector />
      </div>
      <div className="mb-10">
        <CasinoSlot />
      </div>
    </>
  );
}

export default Home;
