import "./App.less";

import React from "react";
import ReactDOM from "react-dom";
import { Route, Router, Routes } from "react-router-dom";
import Introduction from "./view/Introduction";
import Home from "./view/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Introduction />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}


export default App;
