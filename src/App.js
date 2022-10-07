import Banner from "layouts/Banner";
import Jackpot from "layouts/Jackpot";
import Navbar from "layouts/Navbar";
import Promotion from "layouts/Promotion";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-mobile-header-full-height space-y-10px">
        <Banner />
        <Jackpot />
        <Promotion />
      </div>
    </div>
  );
}

export default App;
