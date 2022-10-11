import Slider from "components/Slider";
import SliderCard from "components/SliderCard";
import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const SPECIAL_GAMES_CLASSNAME =
  "rounded pt-[22px] px-10px pb-10px bg-yellow-gradient relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:bg-b before:rounded z-50 before:-z-10";
const TITLE_CLASSNAME =
  "absolute bg-b rounded top-[-13px] left-1/2 -translate-x-1/2 font-bold text-xl px-10px uppercase text-[#e2b157] whitespace-nowrap z-50";

function SpecialGames() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      <div className="container-wrapper">
        <div className={SPECIAL_GAMES_CLASSNAME}>
          <p className={TITLE_CLASSNAME}>SPECIAL GAMES</p>

          <div className="relative">
            <Slider
              slidesPerView={2}
              spaceBetween={10}
              prevRef={prevRef}
              nextRef={nextRef}
            >
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
              <SwiperSlide>
                <SliderCard />
              </SwiperSlide>
            </Slider>

            <button
              ref={prevRef}
              className="absolute left-1 top-1/2 -translate-y-1/2 text-3xl text-white z-50 disabled:opacity-0"
            >
              <MdOutlineKeyboardArrowLeft />
            </button>
            <button
              ref={nextRef}
              className="absolute right-1 top-1/2 -translate-y-1/2 text-3xl text-white z-50 disabled:opacity-0"
            >
              <MdOutlineKeyboardArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialGames;
