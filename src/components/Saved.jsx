import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";

function Saved() {
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
        <div className="flex-1 bg-background1 min-h-[100vh]">
          <main>
            <div className="font-medium font-curve text-4xl h-48 text-font2 flex items-center justify-center ">
              Favourite recipes
            </div>
            <div className="m-4 p-2 grid grid-cols-1 gap-4 flex items-center justify-center md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3">
              <div
                className="relative sm:h-50"
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
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:cursor-pointer">
                    <div className="text-white text-center font-curve">
                      <h3 className="text-xl font-semibold mb-2">
                        Recipe name
                      </h3>
                      <p>description</p>
                      <p>time</p>
                      <p>servings</p>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative sm:h-50"
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
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:cursor-pointer">
                    <div className="text-white text-center font-curve">
                      <h3 className="text-xl font-semibold mb-2">
                        Recipe name
                      </h3>
                      <p>description</p>
                      <p>time</p>
                      <p>servings</p>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative sm:h-50"
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
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:cursor-pointer">
                    <div className="text-white text-center font-curve">
                      <h3 className="text-xl font-semibold mb-2">
                        Recipe name
                      </h3>
                      <p>description</p>
                      <p>time</p>
                      <p>servings</p>
                    </div>
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

export default Saved;
