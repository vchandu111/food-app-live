import React from "react";
import Navbar from "./Components/Common/Navbar";
import AppRouter from "./AppRouter/AppRouter";
import Footer from "./Components/Common/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
