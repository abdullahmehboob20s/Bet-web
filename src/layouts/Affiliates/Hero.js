import React from "react";

function Hero() {
  return (
    <div className="w-full h-screen max-h-[400px] xl:max-h-[520px] relative z-50 flex items-center">
      <img
        src="images/affiliate-cover-img.jpg"
        className="absolute object-cover top-0 left-0 w-full h-full -z-20 pointer-events-none select-none"
        alt=""
      />

      <div className="container-2">
        <h1 className="qualy-font text-center md:text-left text-2xl sm:text-3xl md:text-4xl xl:text-6xl mb-4">
          VBET Affiliates
        </h1>
        <h1 className="text-lg sm:text-xl text-center md:text-left md:text-2xl xl:text-4xl mb-4 font-bold">
          Join our exclusive Affiliate club today!
        </h1>

        <p className="text-sm text-center md:text-left xl:text-xl text-white-6">
          All VBET brands and licenses under one click and one affiliate system
        </p>
      </div>
    </div>
  );
}

export default Hero;
