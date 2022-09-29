import React, { createContext, useContext, useState } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import RightBar from "./components/rigthbar/RightBar";

import "./styles/styles.css";
import Loader from "./components/loader/Loader";

export const UserContext = createContext({});
export const ImageContext = createContext({});

export default function App() {
  const [log, setLog] = useState(false);
  const [activeImage, setActiveImage] = useState({});

  return (
    <ImageContext.Provider value={{ activeImage, setActiveImage }}>
      <UserContext.Provider value={{ log, setLog }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            maxWidth: "1600px",
            margin: "0 auto",
          }}
        >
          <Header />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              background: "#d6e7f5",
              maxWidth: 1600,
            }}
          >
            <Navbar />
            <Main />
            <RightBar />
          </div>
        </div>
      </UserContext.Provider>
    </ImageContext.Provider>
  );
}
