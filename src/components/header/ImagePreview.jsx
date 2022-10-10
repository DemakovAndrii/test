import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ImageContext } from "../../App";
import Loader from "../loader/Loader";

const ImagePreview = () => {
  const { activeImage, setActiveImage, images } = useContext(ImageContext);
  const [loadingImage, setLoadingImage] = useState(true);

  const handleClickBack = () =>
    activeImage <= 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);

  const handleClickNext = () =>
    activeImage >= images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);

  useEffect(() => {
    setLoadingImage(true);
  }, [loadingImage]);

  return (
    <>
      <motion.div
        onClick={handleClickBack}
        className="arrow left"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ delay: 0.3, ease: "easeIn" }}
      >
        <svg
          className="svg-icon__arrow--left"
          viewBox="0 0 7 12"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#d6e7f5"
            fillRule="evenodd"
            d="M.107 6.033c0 .268.107.524.295.713l4.874 4.884c.394.394 1.032.394 1.424 0 .394-.394.394-1.033 0-1.427l-4.162-4.17L6.7 1.863c.394-.394.394-1.033 0-1.427-.392-.394-1.03-.394-1.424 0L.402 5.32c-.188.19-.295.445-.295.713z"
          ></path>
        </svg>
      </motion.div>
      <motion.div
        className="imageBackground"
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        exit={{ y: -100, opacity: 0 }}
      >
        {loadingImage && <Loader />}
        <motion.img
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.1 }}
          className={"image-preview"}
          onClick={() => setActiveImage(-1)}
          src={images[activeImage]?.urls?.regular}
          alt={activeImage.id}
          onLoad={() => setLoadingImage(false)}
        />
      </motion.div>
      <motion.div
        className="arrow right"
        onClick={handleClickNext}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ delay: 0.3, ease: "easeIn" }}
      >
        <svg
          className="svg-icon__arrow--right"
          viewBox="0 0 7 12"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#d6e7f5"
            fillRule="evenodd"
            d="M6.893 5.967c0-.268-.107-.524-.295-.713L1.724.37C1.33-.024.692-.024.3.37c-.394.394-.394 1.033 0 1.427l4.162 4.17L.3 10.137c-.394.394-.394 1.033 0 1.427.392.394 1.03.394 1.424 0L6.598 6.68c.188-.19.295-.445.295-.713z"
          ></path>
        </svg>
      </motion.div>
    </>
  );
};

export default ImagePreview;
