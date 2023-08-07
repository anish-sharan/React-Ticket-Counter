import React from "react";
import HomePage from "../pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetailPage from "../pages/MovieDetailPage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ActorDetailPage from "../pages/ActorDetailPage";
import TheatreSelectionPage from "../pages/TheatreSelectionPage";

const Routing = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/actor" element={<ActorDetailPage />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/theatre" element={<TheatreSelectionPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
