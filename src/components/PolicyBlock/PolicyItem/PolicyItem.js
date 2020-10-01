import React, { useState } from "react";
import "./PolicyItem.scss";

function PolicyItem({ winSize, policyItems, number }) {
  const [isTooltipShowing, setTooltipShowing] = useState(false);
  const [isDirectionSwitched, setDirectionSwitched] = useState(true);
  const toggleTooltip = (newValue) => {
    if (winSize < 700 && winSize > 480) {
      setDirectionSwitched(false);
      setTooltipShowing(newValue);
    }
    if (winSize > 1340) {
      setDirectionSwitched(number % 3 === 0);
      setTooltipShowing(newValue);
    } else if (winSize >= 700 && winSize <= 1094) {
      setDirectionSwitched(number % 2 === 0);
      setTooltipShowing(newValue);
    }
  };
  const [isMobileTooltip, setMobileTooltip] = useState(false);
  const toggleMobileTooltip = (newValue) => {
    if (winSize < 700) {
      setMobileTooltip(newValue);
    }
  };
  return (
    <div
      className="policy-item"
      onMouseEnter={() => toggleTooltip(true)}
      onMouseLeave={() => toggleTooltip(false)}
      onClick={() => {
        if (!isMobileTooltip && winSize < 700) {
          toggleMobileTooltip(true);
        } else toggleMobileTooltip(false);
      }}
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
      {isMobileTooltip && (
        <div className="policy-item-mobile-tooltip">
          <p className="policy-item-mobile-tooltip-title">{policyItems.name}</p>
          {policyItems.description}
        </div>
      )}
    </div>
  );
}

export default PolicyItem;
