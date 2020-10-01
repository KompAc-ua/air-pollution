import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./HeroBlock.scss";

const HeroBlock = ({ arrow, winSize, logos, title, links }) => {
  //   const bgCSS = { background: `url(${bgImg})` };
  const logosImg = logos.map((logoItem, i) => (
    <div className="hero-partners-logo-item" key={i}>
      <img src={logoItem} alt="partner logo" />
    </div>
  ));
  const navLinks = links.map((link, i) => (
    <a className="hero-navigation-item" href={link.href} key={i}>
      {link.title}
    </a>
  ));

  return (
    <section className="hero">
      {winSize <= 720 ? (
        <div className="hero-mobile-burger-menu">
          <BurgerMenu links={links} />
        </div>
      ) : null}
      <div className="container">
        <div className="hero-partners-logo">{logosImg}</div>
        <nav className="hero-navigation">{navLinks}</nav>
        <h1 className="hero-title">{title}</h1>
        <div className="hero-button-container">
          <a className="hero-button" href="#inspect">
            Отследить
          </a>
        </div>
        <div className="hero-mobile-arrow">
          <img src={arrow} alt="partner logo" />
        </div>
      </div>
    </section>
  );
};
export default HeroBlock;
