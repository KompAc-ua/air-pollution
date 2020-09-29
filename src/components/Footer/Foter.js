import React from "react";
import "./Footer.scss";

const Footer = ({ partnersLogo, links }) => {
  const partnersLogoItems = partnersLogo.map((logos, i) => (
    <img
      key={i}
      src={logos}
      alt="partners logo"
      className="footer-partners-item"
    />
  ));
  const navLinks = links.map((link, i) => (
    <a className="footer-nav-link" href={link.href} key={i}>
      {link.title}
    </a>
  ));
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-partners">{partnersLogoItems}</div>
        <div className="footer-text-wrap">
          <div className="footer-nav">{navLinks}</div>
          <p className="footer-nav-text">
            Сайт был разработан{" "}
            <span className="text-yellow">Сергеем Ночовным</span> в учебных
            целях, в рамках образовательной программы IT nation. Дизайн сайта
            создан <span className="text-yellow">Валерией Бубырь</span>.
          </p>
        </div>
        <p className="footer-text">2020, Все права защищены</p>
        <p className="footer-text">
          Согласие на обработку персональных данных
          <br /> Политика конфиденциальности
        </p>
      </div>
    </footer>
  );
};

export default Footer;
