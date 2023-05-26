import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/about/About";
import HomePage from "../components/homePage.jsx/HomePage";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import ProductsList from "../components/Projects/ProductsList";
import SecondPage from "../components/secondPage/SecondPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/secondPage" element={<SecondPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
