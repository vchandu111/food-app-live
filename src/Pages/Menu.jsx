import React from "react";
import { foodItemsWithCategory as data } from "../../data";
import { ShoppingBagIcon, Star } from "lucide-react";
const Menu = () => {
  console.log(data);
  const uniqueCategories = [
    "All",
    ...new Set(data.map((item) => item.category)),
  ];
  console.log(uniqueCategories);
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mt-10">Our Menu</h1>
      <div className="flex flex-wrap gap-2 mt-10 ">
        {uniqueCategories.map((category) => (
          <button className="px-4 py-2 rounded-full bg-gray-200">
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {data.map((item) => (
          <div key={item.id} className="shadow-xl rounded-2xl relative">
            <img src={item.image} className="h-48 w-full object-cover" alt="" />
            <p className="absolute right-5 top-5 bg-white px-2 py-1 rounded-2xl">${item.price}</p>
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
                <button className="flex bg-orange-500 px-4 py-2 rounded-lg">
                  <ShoppingBagIcon className="mr-2 text-white" /> <span className="text-white">Add To Cart</span> 
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
