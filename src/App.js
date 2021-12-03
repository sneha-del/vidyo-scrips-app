import "./App.css";
import React from "react";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact component={Homepage} />
        </Routes>
      </Router>
      <Homepage />
    </>
  );
};

export default App;
