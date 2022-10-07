import JackpotCard from "components/JackpotCard";
import Slider from "components/Slider";
import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Jackpot() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div>
      <div className="container-wrapper">
        <div className="py-18px rounded jackpot-banner z-10 relative">
          <Slider
            slidesPerView={1}
            options={{
              loop: true,
            }}
            prevRef={prevRef}
            nextRef={nextRef}
          >
            <SwiperSlide>
              <JackpotCard />
            </SwiperSlide>
            <SwiperSlide>
              <JackpotCard />
            </SwiperSlide>
            <SwiperSlide>
              <JackpotCard />
            </SwiperSlide>
            <SwiperSlide>
              <JackpotCard />
            </SwiperSlide>
          </Slider>

          <button
            ref={prevRef}
            className="absolute top-1/2 -translate-y-1/2 left-0 z-50 text-2xl"
          >
            <IoIosArrowBack />
          </button>
          <button
            ref={nextRef}
            className="absolute top-1/2 -translate-y-1/2 right-0 z-50 text-2xl"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Jackpot;
