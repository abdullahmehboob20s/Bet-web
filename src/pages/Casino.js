import CasinoPageLinks from "components/CasinoPageLinks";
import Banner from "layouts/Banner";
import SpecialGames from "layouts/CasinoPage/SpecialGames";
import Jackpot from "layouts/Jackpot";
import Layout from "layouts/Layout";

function Casino() {
  return (
    <Layout navbarProps={{ NavbarBottomContent: CasinoPageLinks }}>
      <div className="pt-7px mb-6">
        <div className="mb-10px pt-7px">
          <Banner />
        </div>
        <div className="mb-6">
          <Jackpot />
        </div>
        <div className="mb-10px">
          <SpecialGames />
        </div>
      </div>
    </Layout>
  );
}

export default Casino;
