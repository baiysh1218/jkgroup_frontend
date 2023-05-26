import React from "react";
import Footer from "./components/footer/Footer";
import HomePage from "./components/homePage.jsx/HomePage";
import Navbar from "./components/navbar/Navbar";
import Team from "./components/team/Team";
import MainRoutes from "./routes/MainRoutes";
import Routes from "./routes/MainRoutes";

import "./App.css";
import "./Adaptive.css";

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
