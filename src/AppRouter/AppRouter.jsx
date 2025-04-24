import React from "react";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Cart from "../Pages/Cart";
import { Route, Routes } from "react-router-dom";
import Checkout from "../Pages/Checkout";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    </>
  );
};

export default AppRouter;
