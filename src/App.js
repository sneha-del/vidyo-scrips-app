import "./App.css";
import React from "react";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router";
import Watchlist from "./components/Watchlist";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/watchlist" exact element={<Watchlist />} />
      </Routes>
    </>
  );
};

export default App;
