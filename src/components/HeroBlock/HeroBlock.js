import React from "react";
import "./HeroBlock.scss";

const HeroBlock = ({ logos, title, links }) => {
  //   const bgCSS = { background: `url(${bgImg})` };
  const logosImg = logos.map((logoItem, i) => (
    <img
      src={logoItem}
      alt="partner logo"
      className="hero-partners-logo-item"
      key={i}
    />
  ));
  const navLinks = links.map((link, i) => (
    <a className="hero-navigation-item" href={link.href} key={i}>
      {link.title}
    </a>
  ));

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-partners-logo">{logosImg}</div>
        <nav className="hero-navigation">{navLinks}</nav>
        <h1 className="hero-title">{title}</h1>
        <a className="hero-button" href="#inspect">
          Отследить
        </a>
      </div>
    </section>
  );
};
export default HeroBlock;
