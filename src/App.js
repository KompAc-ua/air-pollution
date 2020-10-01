import React from "react";
import "./App.scss";
import HeroBlock from "./components/HeroBlock/HeroBlock";
// import HeroBlockMobile from "./components/HeroBlockMobile/HeroBlockMobile";
import FactsBlock from "./components/FactsBlock/FactsBlock";

import globalLogo from "./assets/global_logo.svg";
import itnLogo from "./assets/itn_logo.svg";
import shidLogo from "./assets/shid_logo.svg";
import footerGlobalLogo from "./assets/FooterImg/footer_global_logo.svg";
import footerItnLogo from "./assets/FooterImg/footer_ITN_logo.svg";
import footerShidLogo from "./assets/FooterImg/footer_shid_logo.svg";
import arrow from "./assets/arrow.svg";
import PolicyBlock from "./components/PolicyBlock/PollicyBlock";
import Footer from "./components/Footer/Foter";
import AirQuality from "./components/AirQuality/AirQuality";
import { useScreenSize } from "./components/Utility/useScreenSize";

function App() {
  const winSize = useScreenSize();
  const partnersLogo = [shidLogo, itnLogo, globalLogo];
  const footerPartnersLogo = [footerShidLogo, footerItnLogo, footerGlobalLogo];
  const navLinks = [
    { title: "Основные факты", href: "#facts" },
    { title: "Индекс качества воздуха", href: "#index" },
    { title: "Политика по уменьшению загрязнений", href: "#policy" },
  ];
  const factsSlides = [
    {
      id: 1110,
      imgUrl: require("./assets/SlidesImg/slide-1.jpg"),
      text: "Женщины и дети – главные жертвы загрязнения воздуха",
    },
    {
      id: 1111,
      imgUrl: require("./assets/SlidesImg/slide-2.jpg"),
      text: "Защитники окружающей среды подвергаются преследованиям",
    },
    {
      id: 1112,
      imgUrl: require("./assets/SlidesImg/slide-3.jpg"),
      text: "Загрязнение воздуха – нарушение прав человека",
    },
    {
      id: 1113,
      imgUrl: require("./assets/SlidesImg/slide-4.jpg"),
      text:
        "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения атмосферного воздуха",
    },
    {
      id: 1114,
      imgUrl: require("./assets/SlidesImg/slide-5.jpg"),
      text:
        "Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год.",
    },
  ];
  const policyItems = [
    {
      name: "Промышленность",
      description:
        "Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)",
      imgUrl: require("./assets/PolicyBlockImg/policy-1.jpg"),
    },
    {
      name: "Транспорт",
      description:
        "Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы",
      imgUrl: require("./assets/PolicyBlockImg/policy-2.jpg"),
    },
    {
      name: "Городское планирование",
      description:
        "Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов",
      imgUrl: require("./assets/PolicyBlockImg/policy-3.jpg"),
    },
    {
      name: "Энергия",
      description:
        "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения",
      imgUrl: require("./assets/PolicyBlockImg/policy-4.jpg"),
    },
    {
      name: "Энергетика",
      description:
        "Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)",
      imgUrl: require("./assets/PolicyBlockImg/policy-5.jpg"),
    },
    {
      name: "Утилизация отходов",
      description:
        "Стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов",
      imgUrl: require("./assets/PolicyBlockImg/policy-6.jpg"),
    },
  ];
  return (
    <>
      <HeroBlock
        arrow={arrow}
        winSize={winSize}
        logos={partnersLogo}
        title="Качество атмосферного воздуха и здоровье"
        links={navLinks}
      />
      <FactsBlock
        winSize={winSize}
        title="Основные факты"
        slides={factsSlides}
      />
      <AirQuality />
      <PolicyBlock
        title="Политика по уменьшению загрязнений"
        subtitle="Есть много примеров успешной политики 
        по уменьшению загрязнения воздуха в таких секторах, как транспорт,
         городское планирование, энергетика и промышленность:"
        items={policyItems}
      />
      <Footer links={navLinks} partnersLogo={footerPartnersLogo} />
    </>
  );
}

export default App;
