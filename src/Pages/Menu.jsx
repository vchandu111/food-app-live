import React, { useState } from "react";
import { foodItemsWithCategory as data } from "../../data";
import { ShoppingBagIcon, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/actions";
import { ToastContainer,toast } from "react-toastify";
const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);
  console.log(selectedCategory);

  console.log("filtered data", filteredData);

  const handleAddToCart = (item) => {
    console.log(item);
    dispatch(addToCart(item));
    toast.success('🦄 Adding Item to Cart!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  const uniqueCategories = [
    "All",
    ...new Set(data.map((item) => item.category)),
  ];
  //console.log(uniqueCategories);
  return (
    <div className="container mx-auto">
      <ToastContainer />
      <h1 className="text-4xl font-bold mt-10">Our Menu</h1>
      <div className="flex flex-wrap gap-2 mt-10 ">
        {uniqueCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full  ${
              selectedCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {filteredData.map((item) => (
          <div key={item.id} className="shadow-xl rounded-2xl relative">
            <img src={item.image} className="h-48 w-full object-cover" alt="" />
            <p className="absolute right-5 top-5 bg-white px-2 py-1 rounded-2xl">
              ${item.price}
            </p>
            <div className="p-6 space-y-6">
              <div className="flex justify-between">
                <p>{item.name}</p>
                <p className="flex">
                  <span>
                    <Star className="text-orange-500 mr-1" />
                  </span>{" "}
                  {item.rating}
                </p>
              </div>
              <p>{item.description}</p>
              <div className="flex justify-between items-center">
                <p>{item.category}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex bg-orange-500 px-4 py-2 rounded-lg"
                >
                  <ShoppingBagIcon className="mr-2 text-white" />{" "}
                  <span className="text-white">Add To Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
