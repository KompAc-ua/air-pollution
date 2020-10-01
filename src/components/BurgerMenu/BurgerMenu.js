import React, { useState } from "react";
import "./BurgerMenu.scss";
import BurgerMenuPage from "./BurgerMenuPage/BurgerMenuPage";

const BurgerMenu = ({ links }) => {
  const [isBurgerMenuActive, setBurgerMenuActive] = useState(false);
  const toggleBurgerMenu = (newValue) => {
    setBurgerMenuActive(newValue);
  };

  return (
    <section>
      <div
        className="burger-menu-wrapper"
        onClick={() => {
          isBurgerMenuActive ? toggleBurgerMenu(false) : toggleBurgerMenu(true);
        }}
      >
        <div
          className={`menu-icon ${
            isBurgerMenuActive ? "menu-icon-active" : ""
          }`}
        ></div>
      </div>
      {isBurgerMenuActive ? <BurgerMenuPage links={links} /> : null}
    </section>
  );
};

export default BurgerMenu;
