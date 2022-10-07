import Banner from "layouts/Banner";
import Navbar from "layouts/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mt-mobile-header-full-height">
        <Banner />
      </div>
    </div>
  );
}

export default App;
