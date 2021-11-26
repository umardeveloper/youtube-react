import React from "react";
import Home from "./Pages/Home/Home";
import Channel from "./Pages/Channel/Channel";
import Videopage from "./Pages/Videopage/Video";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/video/:id" element={<Videopage />} />
      </Routes>
    </>
  );
}
export default App;
