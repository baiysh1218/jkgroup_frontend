import React from "react";
import Footer from "./components/footer/Footer";
import HomePage from "./components/homePage.jsx/HomePage";
import Navbar from "./components/navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Routes from "./routes/MainRoutes";

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
