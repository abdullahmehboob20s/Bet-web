import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay, Navigation } from "swiper";
SwiperCore.use([Navigation]);

const slideData = [
  { img: "images/banner-img.webp", link: "/" },
  { img: "images/banner-img.webp", link: "/" },
  { img: "images/banner-img.webp", link: "/" },
  { img: "images/banner-img.webp", link: "/" },
  { img: "images/banner-img.webp", link: "/" },
  { img: "images/banner-img.webp", link: "/" },
];

function Banner() {
  const [slideCount, setSlideCount] = useState(0);

  return (
    <div className="pt-7px">
      <div className="container-wrapper">
        <div className="relative">
          <div className="text-[rgba(255,255,255,.9)] bg-[rgba(167,31,103,.7)] rounded absolute top-6px right-6px py-4px px-6px z-10 text-xs">
            {slideCount} / {slideData.length}
          </div>
          <Swiper
            onSlideChange={(swiper) => {
              setSlideCount(swiper.realIndex + 1);
            }}
            slidesPerView={1}
            spaceBetween={20}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {slideData.map((item, index) => (
              <SwiperSlide key={index}>
                <a href={item.link} className="block w-full">
                  <img src={item.img} className="w-full rounded" alt="" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Banner;
