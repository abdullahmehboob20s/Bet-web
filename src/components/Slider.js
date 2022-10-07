import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

// interface Props {
//   slidesPerView: number;
//   spaceBetween: number;
//   breakpoints?: any;
//   children: any;
//   prevRef: any;
//   nextRef: any;
//   options?: SwiperOptions;
// }

function Slider(props) {
  return (
    <Swiper
      {...props.options}
      slidesPerView={props.slidesPerView}
      spaceBetween={props.spaceBetween}
      modules={[Navigation]}
      navigation={{
        prevEl: props.prevRef && props.prevRef.current,
        nextEl: props.nextRef && props.nextRef.current,
      }}
      onSwiper={(swiper) => {
        setTimeout(() => {
          if (swiper.params) {
            if (props.prevRef && props.nextRef) {
              swiper.params.navigation.prevEl = props.prevRef.current;
              swiper.params.navigation.nextEl = props.nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }
        });
      }}
      breakpoints={props.breakpoints}
    >
      {props.children}
    </Swiper>
  );
}

export default Slider;
