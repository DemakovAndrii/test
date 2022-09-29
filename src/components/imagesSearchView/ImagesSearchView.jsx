import React, { useContext, useEffect, useState } from "react";
import cl from "./isv.module.css";
import Loader from "../loader/Loader";
import { ImageContext } from "../../App";

const ImagesSearchViewItem = ({ imgUrl, setActiveImage, id }) => {
  return (
    <div data-id={id} className={cl["image-item"]} onClick={setActiveImage}>
      <img src={imgUrl} alt="" />
    </div>
  );
};

const ImagesSearchView = ({ images, active, message }) => {
  const { setActiveImage } = useContext(ImageContext);

  const handleClickImage = (event) => {
    const activeImageId = event.currentTarget.getAttribute("data-id");
    const result = images.filter(({ id }) => id === activeImageId);
    setActiveImage(...result);
  };

  return (
    <>
      <div className={`${cl.box} ${active ? cl.active : ""}`}>
        <div className={cl["img-container"]}>
          {message && <div className={cl.message}>{message}</div>}
          {images ? (
            images.map(({ id, urls }) => (
              <ImagesSearchViewItem
                id={id}
                imgUrl={urls.regular}
                key={id}
                setActiveImage={handleClickImage}
              />
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default ImagesSearchView;

// todo: add state to active image
// todo: build preview and blur
