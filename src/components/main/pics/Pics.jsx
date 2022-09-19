import React from "react";
import { useState } from "react";
import cl from "./pics.css";
import pics from "../../../data/pics.json";

export default function Pics() {
  const [open, setOpen] = useState(0);
  const openTab = (e) =>
    setOpen(Number(e.currentTarget.getAttribute("data-index")));

  return (
    <>
      <div className="flex">
        {pics.map(({ img, name, rate }, index) => {
          return (
            <div
              className={`pics ${open === index ? "active" : ""}`}
              key={index}
              data-index={index}
              onClick={openTab}
            >
              <img
                className={`pics-img ${open === index ? "active" : ""}`}
                src={img}
                alt=""
              />
              <div>
                <div className={`pics-name ${open === index ? "active" : ""}`}>
                  {name}
                </div>
                <div className={`pics-rate ${open === index ? "active" : ""}`}>
                  {rate}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
