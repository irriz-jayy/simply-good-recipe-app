import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";

function Recipes() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-background2 bg-opacity-30">
          <main>
            <div className="text-center font-medium font-curve text-4xl ">
              Your recipes
            </div>
            <div className="border border-4 border-red-800 m-4 p-2 grid grid-cols-3 gap-4">
              <div
                className="relative h-96"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src="https://cdn.britannica.com/86/145786-050-5BD27317/chef-cooking-restaurant-kitchen.jpg"
                  alt=""
                  className="w-full h-full object-cover "
                />

                {isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 flex-col">
                    <div className="text-white text-center font-curve">
                      <h3 className="text-xl font-semibold mb-2">
                        Recipe name
                      </h3>
                      <p>description</p>
                      <p>time</p>
                      <p>servings</p>
                    </div>
                    <div className="absolute bottom-3 left-3">Delete</div>
                    <div className="absolute bottom-3 right-3">Update</div>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Recipes;
