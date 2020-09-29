import React, { useState } from "react";
import "./PolicyItem.scss";

function PolicyItem({ policyItems, number }) {
  const [isTooltipShowing, setTooltipShowing] = useState(false);
  const [isDirectionSwitched, setDirectionSwitched] = useState(true);
  const toggleTooltip = (newValue) => {
    setDirectionSwitched(number % 3 === 0);
    setTooltipShowing(newValue);
  };
  return (
    <div
      className="policy-item"
      onMouseEnter={() => toggleTooltip(true)}
      onMouseLeave={() => toggleTooltip(false)}
      style={{
        background: `url(${policyItems.imgUrl}) center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <p className="policy-item-name">{policyItems.name}</p>
      {isTooltipShowing && (
        <p
          className={`policy-item-tooltip ${
            isDirectionSwitched ? "policy-item-tooltip-switched" : ""
          }`}
        >
          {policyItems.description}
        </p>
      )}
    </div>
  );
}

export default PolicyItem;
