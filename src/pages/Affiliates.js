import React from "react";
import Comission from "layouts/Affiliates/Comission";
import Hero from "layouts/Affiliates/Hero";
import Promotion from "layouts/Affiliates/Promotion";
import Contact from "layouts/Affiliates/Contact";
import Footer from "layouts/Affiliates/Footer";
import Navbar from "layouts/Affiliates/Navbar";

function Affiliates() {
  return (
    <div className="min-h-screen bg-light-white text-black">
      <Navbar />

      <div className="mb-12">
        <Hero />
      </div>

      <div className="mb-20">
        <Promotion />
      </div>

      <div className="mb-20 lg:mb-36">
        <Comission />
      </div>

      <div className="mb-20">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default Affiliates;
