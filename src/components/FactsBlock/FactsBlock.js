import React from "react";
import FactsItem from "./FactsItem/FactsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "./FactsBlock.scss";

SwiperCore.use([Navigation, Pagination]);
const FactsBlock = ({ winSize, title, slides }) => {
  console.log(winSize);
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
        slidesPerView={2}
        spaceBetween={20}
        centeredSlides={false}
        slidesPerGroup={3}
        width={774}
        breakpoints={{
          1283: { slidesPerView: 2, slidesPerGroup: 3 },
          720: { slidesPerView: 2, slidesPerGroup: 2 },
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        // centerInsufficientSlides={true}

        // width={winSize - 500}
      >
        {factsSlides}
      </Swiper>

      <div className="swiper-button-next" />
      <div className="facts-pagination" />
    </section>
  );
};

export default FactsBlock;
