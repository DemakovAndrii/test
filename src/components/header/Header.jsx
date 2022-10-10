import React, { useContext } from "react";
import { useEffect, useState } from "react";
import "./header_component.css";
import { ImageContext, UserContext } from "../../App";
import axios from "axios";
import ImagesSearchView from "../imagesSearchView/ImagesSearchView";
import { AnimatePresence, motion } from "framer-motion";
import ImagePreview from "./ImagePreview";
import UserProfile from "./UserProfile";

export default function Header() {
  const { user } = useContext(UserContext);
  const { activeImage, setActiveImage, images, setImages } =
    useContext(ImageContext);

  const [query, setQuery] = useState("");
  const [anim, setAnim] = useState("");
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
      setMessage("Please, type a valid query.");
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
    setActiveImage(-1);
  };

  return (
    <div className="header">
      <div className="container">
        <img className="logo" src="/assets/header/logo.png" alt="" />
        <div
          className={`blur ${activeBlurImagePreview ? "active" : ""}`}
          onClick={handleToggleBlur}
        ></div>

        <div className={`search-bar ${activeBlurImagePreview ? "active" : ""}`}>
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

        <div className="user-settings">
          <div className="switch">
            <img src="assets/header/switch.svg" alt="" />
          </div>

          <UserProfile />

          <img
            className="person"
            src={
              user?.name
                ? "assets/header/person.png"
                : "assets/header/vopros.svg"
            }
            alt=""
          />

          <div className="notification">
            <img src="/assets/header/notification.svg" alt="" />
            <div className={`notification-logo ${anim}`}></div>
          </div>
          <AnimatePresence>
            {activeImage >= 0 && <ImagePreview />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
