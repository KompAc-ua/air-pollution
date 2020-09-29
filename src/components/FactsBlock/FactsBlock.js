import React from "react";
import FactsItem from "./FactsItem/FactsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "./FactsBlock.scss";

SwiperCore.use([Navigation, Pagination]);
const FactsBlock = ({ title, slides }) => {
  const factsSlides = slides.map((slide) => (
    <SwiperSlide key={slide.id}>
      <FactsItem item={slide.text} img={slide.imgUrl} />
    </SwiperSlide>
  ));
  return (
    <section className="facts container" id="facts">
      <h2 className="facts-title">{title}</h2>
      <div className="swiper-button-prev" />
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".facts-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="facts-pagination-bullet ${className}"></span>`;
          },
        }}
        slidesPerView={3}
        spaceBetween={40}
        centeredSlides={true}
        slidesPerGroup={3}
      >
        {factsSlides}
      </Swiper>
      <div className="swiper-button-next" />
      <div className="facts-pagination" />
    </section>
  );
};

export default FactsBlock;
