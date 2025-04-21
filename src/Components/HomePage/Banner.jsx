import { ArrowRight } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-around items-center container mx-auto mt-16">
      <div>
        <div className="text-[60px] font-bold">Delicious Food,</div>
        <div className="text-[60px] font-bold text-orange-500 -mt-4">
          Delivered Fast
        </div>
        <p className="text-[20px]">
          Experience the best local restaurants at your doorstep. Fresh, quick,
          and reliable delivery.
        </p>
        <div className="mt-10 flex">
          <button className="bg-orange-500 px-6 py-4 rounded-xl text-white flex">
            Order Now{" "}
            <span>
              <ArrowRight />
            </span>{" "}
          </button>
          <button className="border border-orange-500 px-6 py-4 text-orange-500 font-bold ml-5 rounded-xl">View Menu</button>
        </div>
      </div>
      <div>
        <img
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
