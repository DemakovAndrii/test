import React, { useState } from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import RightBar from "./components/rigthbar/RightBar";

import "./styles/styles.css";
export default function App() {
  const [log, setLog] = useState(false);
  const acc = () => setLog(!log);

  return (
    <>
      <Header log={log} />
      <div style={{ display: "flex" }}>
        <Navbar log={log} acc={acc} />
        <Main />
        <RightBar />
      </div>
    </>
  );
}
