import React from "react";
import HomePage from "../pages/User/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetailPage from "../pages/User/MovieDetailPage";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import ActorDetailPage from "../pages/User/ActorDetailPage";
import TheatreSelectionPage from "../pages/User/TheatreSelectionPage";
import SeatSelectionPage from "../pages/User/SeatSelectionPage";
import AdminHomePage from "../pages/Admin/AdminHomePage";
import AddMoviePage from "../pages/Admin/AddMoviePage";

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
        <Route path="/seat-selection" element={<SeatSelectionPage />} />

        {/* ADMIN Routes */}
        <Route path="/admin/" element={<AdminHomePage />} />
        <Route path="/admin/add_movie" element={<AddMoviePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
