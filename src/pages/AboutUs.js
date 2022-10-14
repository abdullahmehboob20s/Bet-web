import FriendsAndPartners from "layouts/AboutUs/FriendsAndPartners";
import History from "layouts/AboutUs/History";
import Inovations from "layouts/AboutUs/Inovations";
import ProductAndSales from "layouts/AboutUs/ProductAndSales";
import RainbowContent from "layouts/AboutUs/RainbowContent";
import Vision from "layouts/AboutUs/Vision";

function AboutUs() {
  return (
    <div className="min-h-screen bg-light-white text-black pb-20">
      <div className="container-2 h-screen max-h-[380px] xl:max-h-[520px]">
        <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-[84px] font-bebas text-pink font-bold italic pt-8 text-center">
          WE ARE VBET. <br className="block md:hidden" /> THIS IS OUR STORY
        </h1>
      </div>

      <div className="mb-12 lg:mb-20">
        <RainbowContent />
      </div>

      <div className="mb-16 lg:mb-20" id="history">
        <History />
      </div>

      <div className="mb-12 lg:mb-20" id="our">
        <ProductAndSales />
      </div>

      <div className="mb-16 lg:mb-20" id="vision">
        <Vision />
      </div>

      <div className="mb-12 lg:mb-24" id="innovations">
        <Inovations />
      </div>

      <div className="mb-6" id="friends">
        <FriendsAndPartners />
      </div>
    </div>
  );
}

export default AboutUs;
