import React from "react";
import "./FactsItem.scss";

const FactsItem = ({ item, img }) => {
  return (
    <div className="facts-slide">
      <img src={img} alt="slide foto"></img>
      <p className="facts-slide-text">{item}</p>
    </div>
  );
};
export default FactsItem;
