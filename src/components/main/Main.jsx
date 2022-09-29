import React from "react";
import cl from "./main_component.css";
import sss from "../../data/carousel.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import SwiperItem from "./SwiperItem";
import Pics from "./pics/Pics";

export default function Main() {
  return (
    <div className="main">
      <p className="title">Discover World</p>
      <div className="sort">
        <p>Recommended</p>
        <p>Popular Places</p>
        <p>Trip’s</p>
      </div>
      <Swiper
        loop
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={3}
        style={{ maxWidth: "790px" }}
      >
        {sss.map(({ img, text, loc, rate, imghover }, index) => (
          <SwiperSlide key={text + index}>
            <SwiperItem
              img={img}
              text={text}
              loc={loc}
              rate={rate}
              imghover={imghover}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Pics />
    </div>
  );
}
