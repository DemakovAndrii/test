import React, { useContext, useState } from "react";
import cl from "./navbar_component.css";
import links from "../../data/navbar-data.json";
import { UserContext } from "../../App";

export default function Navbar() {
  const { log, setLog } = useContext(UserContext);
  const acc = () => setLog(!log);

  const [activeIndex, setActiveIndex] = useState(-1);

  const yellowpidor = (e) => {
    setActiveIndex(Number(e.target.getAttribute("data-index")));
  };

  const noellowpidor = () => {
    setActiveIndex(-1);
  };

  return (
    <div className="navbar">
      {links.map(({ name, logo }, index) => (
        <div
          className={`element ${activeIndex === index ? "active" : ""}`}
          key={index}
          data-index={index}
          onMouseEnter={yellowpidor}
          onMouseLeave={noellowpidor}
        >
          <div className="element-logo">
            <img src={logo} />
          </div>
          {name}
        </div>
      ))}
      <div className="element" onClick={acc}>
        <img
          className="element-logo"
          src="/assets/navbar/sign out.svg"
          alt=""
        />
        {log ? "Log Out" : "Sign In"}
      </div>
    </div>
  );
}
