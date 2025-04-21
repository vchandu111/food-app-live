import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  House,
  Info,
  LogIn,
  Menu,
  Phone,
  ShoppingCart,
  UserPlus,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full shadow-lg p-6">
      <nav className="flex justify-around container mx-auto items-center">
        <div className="text-2xl font-bold text-orange-500">Twiggy</div>
        <div className="flex justify-between w-1/4">
          <NavLink className="flex" to="/">
            <span className="mr-1" >
              <House />
            </span>
            Home
          </NavLink>
          <NavLink className="flex" to="/menu">
            <span className="mr-1">
              <Menu />
            </span>
            Menu
          </NavLink>
          <NavLink className="flex" to="/about">
            {" "}
            <span className="mr-1">
              <Info />
            </span>
            About
          </NavLink>
          <NavLink className="flex" to="/contact">
            {" "}
            <span className="mr-1">
              <Phone />
            </span>
            Contact
          </NavLink>
        </div>
        <div className="flex justify-between w-[15%]">
          <Link to='/login' className="flex border px-4 py-2 border-orange-500 rounded-md text-orange-500">
            {" "}
            <span className="mr-1">
              <LogIn />
            </span>{" "}
            Login
          </Link>
          <Link to='/signup' className="flex px-4 py-2 bg-orange-500 rounded-md text-white ml-6">
            {" "}
            <span className="mr-1">
              <UserPlus />
            </span>{" "}
            Signup
          </Link>
          <Link to='/cart' className="flex m-2 ml-4">
            <ShoppingCart />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
