import React from "react";
import HomePage from "../pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
