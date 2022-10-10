import React, { useRef } from "react";
import { useState } from "react";
import cl from "./pics.css";
import pics from "../../../data/pics.json";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

export default function Pics() {
  const [open, setOpen] = useState(0);
  const [ref, { width }] = useMeasure();

  const openTab = (e) =>
    setOpen(Number(e.currentTarget.getAttribute("data-index")));

  const isOpen = (index) => {
    return open === index;
  };

  console.log(width);

  return (
    <motion.div className="flex">
      {pics.map(({ img, name, rate }, index) => {
        return (
          <motion.div
            className={`pics`}
            key={index}
            data-index={index}
            onClick={openTab}
            animate={{
              background: isOpen(index)
                ? "rgba(4, 51, 62, 1)"
                : "rgba(4, 51, 62, 0)",
              padding: isOpen(index) ? 20 : 0,
            }}
            transition={{ duration: 1 }}
          >
            <motion.img
              className={`pics-img`}
              src={img}
              alt=""
              animate={{
                maxHeight: isOpen(index) ? 90 : 120,
                maxWidth: isOpen(index) ? 90 : 120,
              }}
            />
            <div ref={ref}>
              <AnimatePresence initial={false}>
                {isOpen(index) && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 1 }}
                    className={"pics-text"}
                  >
                    <div className={`pics-name`}>{name}</div>
                    <div className={`pics-rate`}>{rate}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
