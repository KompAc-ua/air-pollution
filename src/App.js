import React from "react";
import "./App.scss";
import HeroBlock from "./components/HeroBlock/HeroBlock";

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
  return (
    <>
      <HeroBlock
        logos={partners}
        title="Качество атмосферного воздуха и здоровье"
        links={navLinks}
      />
    </>
  );
}

export default App;
