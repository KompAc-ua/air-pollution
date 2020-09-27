import React from "react";
import "./FactsBlock.scss";
import FactsItem from "./FactsItem/FactsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

const FactsBlock = ({ title, slides }) => {
  const factsSlides = slides.map((slide) => (
    <SwiperSlide key={slide.id}>
      <FactsItem item={slide.text} img={slide.imgUrl} />
    </SwiperSlide>
  ));
  return (
    <section className="facts">
      <h2 className="facts-title">{title}</h2>
      <Swiper slidesPerView={3} spaceBetween={10}>
        {factsSlides}
      </Swiper>
    </section>
  );
};

export default FactsBlock;
