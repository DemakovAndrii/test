import React, { useState } from "react";
import data from "../../data/rightbar.json";
import styles from "./rightbar.module.css";
import RightBarItem from "./RightBarItem";

export default function RightBar() {
  const [card, setCard] = useState(0);

  const openCard = (e) => {
    if (e.currentTarget.id) return;
    setCard(Number(e.currentTarget.getAttribute("data-index")));
  };

  return (
    <div className={styles.rightBar}>
      {data.map(({ img, name, loc, coast }, index) => (
        <RightBarItem
          cardNumber={card}
          img={img}
          name={name}
          loc={loc}
          coast={coast}
          index={index}
          key={name + index}
          openCard={openCard}
        />
      ))}
    </div>
  );
}
