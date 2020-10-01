import React from "react";
import "./BurgerMenuPage.scss";

const BurgerMenuPage = ({ links }) => {
  const navLinks = links.map((link, i) => (
    <a className="burgerpage-links-item" href={link.href} key={i}>
      {link.title}
    </a>
  ));

  return (
    <div className="burgerpage">
      <div className="burgerpage-links">{navLinks}</div>
      <p className="burgerpage-footer-text">2020, Все права защищены</p>
      <p className="burgerpage-footer-text">
        Согласие на обработку персональных данных
        <br />
        Политика конфиденциальности
      </p>
    </div>
  );
};

export default BurgerMenuPage;
