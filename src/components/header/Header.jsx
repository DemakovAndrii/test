import React, { useContext } from "react";
import { useEffect, useState } from "react";
import "./header_component.css";
import { ImageContext, UserContext } from "../../App";
import axios from "axios";
import ImagesSearchView from "../imagesSearchView/ImagesSearchView";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const { log } = useContext(UserContext);
  const { activeImage, setActiveImage } = useContext(ImageContext);

  const [query, setQuery] = useState("");
  const [anim, setAnim] = useState("");
  const [images, setImages] = useState([]);
  const [activeImagePreview, setActiveImagePreview] = useState(false);
  const [activeBlurImagePreview, setActiveBlurImagePreview] = useState(false);
  const [message, setMessage] = useState("Please, type something");
  const azaza = () => setAnim("active");

  useEffect(() => {
    document.body.classList.toggle("lock", activeBlurImagePreview);
  }, [activeBlurImagePreview]);

  useEffect(() => {
    setTimeout(azaza, 5000);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imagesResponse = await axios.get(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=jm2czmEXk8ku9KpLzQOA1aAOtBWzd3goCtkviHQEyIQ`
    );
    setImages(imagesResponse.data.results);
    setMessage("");
    if (!imagesResponse.data.results.length)
      setMessage("Please, type something normal");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setActiveImagePreview(true);
      setActiveBlurImagePreview(true);
    } else {
      setActiveImagePreview(false);
      setActiveBlurImagePreview(false);
      setMessage("Please, type something");
    }

    setQuery(value);
  };

  const handleToggleBlur = () => {
    setActiveBlurImagePreview(false);
    setActiveImagePreview(false);
    setActiveImage({});
  };

  return (
    <div className="header">
      <div className="container">
        <img className="logo" src="/assets/header/logo.png" alt="" />
        <div
          className={`blur ${activeBlurImagePreview ? "active" : ""}`}
          onClick={handleToggleBlur}
        ></div>

        <div className="search-bar">
          <form onSubmit={handleSubmit} action="">
            <img
              className="search-logo"
              src="/assets/header/search.svg"
              alt=""
            />
            <input
              onChange={(e) => handleChange(e)}
              value={query}
              className="search-input"
              type="text"
              placeholder="Search for places"
              onFocus={() => {
                setActiveImagePreview(true);
                setActiveBlurImagePreview(true);
              }}
            />
          </form>
          <ImagesSearchView
            images={images}
            active={activeImagePreview}
            message={message}
          />
        </div>
        <div className="switch">
          <img src="assets/header/switch.svg" alt="" />
        </div>
        <div className="location">
          <img
            className="location-logo"
            src="/assets/header/location.svg"
            alt=""
          />
          <p className="location-city">New York/ Dc</p>
        </div>
        <div className="notification">
          <img src="/assets/header/notification.svg" alt="" />
          <div className={`notification-logo ${anim}`}></div>
        </div>

        <img
          className="person"
          src={log ? "assets/header/person.png" : "assets/header/vopros.svg"}
          alt=""
        />
        <AnimatePresence>
          {activeImage?.urls?.full && (
            <motion.img
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 1000 }}
              exit={{ opacity: 0, x: -1000 }}
              className={"image-preview"}
              onClick={() => setActiveImage()}
              src={activeImage?.urls?.full}
              alt={activeImage.id}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
