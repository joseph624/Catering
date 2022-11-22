import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

import HomePage from "./components/homepage/Homepage";
import DropOff from "./components/drop-off-catering/drop-off/drop-off";
import BarService from "./components/bar-service/bar-service";

import ScrollToTop from "./components/shared/ScrollToTop";

const App = () => (
  <ScrollToTop>
    <Routes onUpdate={() => window.scrollTo(0, 0)}>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/drop-off' element={<DropOff />} />
      <Route exact path='/bar-service' element={<BarService />} />
    </Routes>
  </ScrollToTop>
);
export default App;
