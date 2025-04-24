import { Delete, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Cart = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("idToken");
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);
  const cartData = useSelector((state) => state.cartItems);
  console.log(cartData);
  const subTotal = cartData.reduce((acc, ele) => acc + ele.price, 0).toFixed(2);
  console.log(subTotal);
  const totalPrice = Number(subTotal) + 2.99;

  const handleCheckout = () => {
    isLoggedIn ? navigate("/checkout") : navigate("/login");
  };
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-3xl font-bold">
        Your Cart ({cartData.length} items)
      </h1>
      <div className="flex justify-between gap-4">
        <div className="w-3/4">
          {cartData.map((item) => (
            <div key={item.id} className="flex shadow-lg p-4 relative">
              <div>
                <img
                  src={item.image}
                  alt=""
                  className="h-24 w-24 object-cover rounded-md"
                />
              </div>
              <div className="px-2 space-y-2">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p>{item.description}</p>
                <p className="text-lg text-orange-500 font-bold">
                  ${item.price}
                </p>
              </div>
              <div className="absolute right-5">
                <Trash className="text-red-500 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/4 shadow-md p-4">
          <h1 className="text-2xl font-bold w-full">Order Summary</h1>
          <div className="text-lg">
            <div className="flex justify-between w-full mt-5">
              <p>Subtotal</p>
              <p className="text-orange-500 font-bold">${subTotal}</p>
            </div>
            <div className="flex justify-between w-full mt-5 mb-5">
              <p>Delivery Fee</p>
              <p className="text-orange-500 font-bold">$2.99</p>
            </div>
            <hr />
            <div className="flex justify-between w-full mt-5">
              <p>Total</p>
              <p className="text-orange-500 font-bold">${totalPrice}</p>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            className="bg-orange-500 w-full py-2 mt-5"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
