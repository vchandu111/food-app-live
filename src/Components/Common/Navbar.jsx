import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  House,
  Info,
  LogIn,
  LogOut,
  Menu,
  Phone,
  ShoppingCart,
  UserPlus,
} from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const cartData = useSelector((state) => state.cartItems);

  useEffect(() => {
    const token = localStorage.getItem("idToken");
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);
  console.log(isLoggedIn);

  const handleLogout = () => {
    localStorage.removeItem("idToken");
    setIsLoggedIn(false);
    navigate("/signup");
  };
  return (
    <div className="w-full shadow-lg p-6">
      <nav className="flex justify-around container mx-auto items-center">
        <div className="text-2xl font-bold text-orange-500">Twiggy</div>
        <div className="flex justify-between w-1/4">
          <NavLink className="flex" to="/">
            <span className="mr-1">
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
          {isLoggedIn ? (
            <Link
              onClick={handleLogout}
              className="flex border px-4 py-2 border-orange-500 rounded-md text-orange-500"
            >
              {" "}
              <span className="mr-1">
                <LogOut />
              </span>{" "}
              Logout
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="flex border px-4 py-2 border-orange-500 rounded-md text-orange-500"
              >
                {" "}
                <span className="mr-1">
                  <LogIn />
                </span>{" "}
                Login
              </Link>
              <Link
                to="/signup"
                className="flex px-4 py-2 bg-orange-500 rounded-md text-white ml-6"
              >
                {" "}
                <span className="mr-1">
                  <UserPlus />
                </span>{" "}
                Signup
              </Link>
            </>
          )}

          <Link to="/cart" className="flex m-2 ml-4 relative">
            <ShoppingCart /> <span className="absolute -top-2 left-4 bg-orange-500 rounded-full w-6 h-6 flex items-center justify-center">{cartData.length}</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
