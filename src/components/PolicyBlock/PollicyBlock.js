import React from "react";
import "./PolicyBlock.scss";
import PolicyItem from "./PolicyItem/PolicyItem";

const PolicyBlock = ({ title, subtitle, items }) => {
  const itemList = items.map((policyItems, i) => (
    <PolicyItem policyItems={policyItems} number={i + 1} key={i} />
  ));
  return (
    <section className="policy container" id="policy">
      <h2 className="policy-title">{title}</h2>
      <p className="policy-subtitle">{subtitle}</p>
      <div className="policy-list">{itemList}</div>
    </section>
  );
};

export default PolicyBlock;
