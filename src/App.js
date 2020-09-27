import React from "react";
import "./App.scss";
import HeroBlock from "./components/HeroBlock/HeroBlock";
import FactsBlock from "./components/FactsBlock/FactsBlock";

import globalLogo from "./assets/global_logo.svg";
import itnLogo from "./assets/itn_logo.svg";
import shidLogo from "./assets/shid_logo.svg";

function App() {
  const partners = [shidLogo, itnLogo, globalLogo];
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
  return (
    <>
      <HeroBlock
        logos={partners}
        title="Качество атмосферного воздуха и здоровье"
        links={navLinks}
      />
      <FactsBlock title="Основные факты" slides={factsSlides} />
    </>
  );
}

export default App;
