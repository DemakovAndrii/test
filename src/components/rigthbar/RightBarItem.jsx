import React, { useState } from "react";
import cl from "./rightbar.module.css";

const RightBarItem = ({
  index,
  openCard,
  img,
  cardNumber,
  name,
  loc,
  coast,
}) => {
  const [activeIcon, setActiveIcon] = useState(false);
  const handleIconActive = () => setActiveIcon(!activeIcon);

  return (
    <div
      className={`${cl.card} ${cardNumber === index ? cl.active : ""}`}
      key={index}
      data-index={index}
      onClick={openCard}
    >
      <img
        className={`${cl.img} ${cardNumber === index ? cl.active : ""}`}
        src={img}
        alt=""
      />

      <div className={`${cl.info} ${cardNumber === index ? cl.active : ""}`}>
        <div>
          <div
            className={`${cl.name} ${cardNumber === index ? cl.active : ""}`}
          >
            {name}
          </div>
          <div className={`${cl.loc} ${cardNumber === index ? cl.active : ""}`}>
            <img src="/assets/rightbar/location.svg" alt="" />
            {loc}
          </div>
        </div>

        <div className={cl.box} onClick={handleIconActive}>
          <div
            className={`${cl["box-logo"]} ${activeIcon ? cl.active : ""}`}
            id={"icon"}
          ></div>
        </div>
      </div>

      <div className={`${cl.booking} ${cardNumber === index ? cl.active : ""}`}>
        <div>
          <span>per/person</span>
          <div
            className={`${cl.coast} ${cardNumber === index ? cl.active : ""}`}
          >
            {coast}
          </div>
        </div>
        <button
          className={`${cl.button} ${cardNumber === index ? cl.active : ""}`}
        >
          Book Travel
        </button>
      </div>
    </div>
  );
};

export default RightBarItem;
