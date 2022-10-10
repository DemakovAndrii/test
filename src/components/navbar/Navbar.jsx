import React, { useContext, useState } from "react";
import cl from "./navbar_component.css";
import links from "../../data/navbar-data.json";
import { UserContext } from "../../App";

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const yellowMark = (e) =>
    setActiveIndex(Number(e.target.getAttribute("data-index")));
  const noYellowMark = () => setActiveIndex(-1);

  return (
    <div className="navbar">
      {links.map(({ name, logo }, index) => (
        <div
          className={`element ${activeIndex === index ? "active" : ""}`}
          key={index}
          data-index={index}
          onMouseEnter={yellowMark}
          onMouseLeave={noYellowMark}
        >
          <div className="element-logo">
            <img src={logo} />
          </div>
          {name}
        </div>
      ))}
    </div>
  );
}
