import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import Carousel from "./Carousel";

function Homepage() {
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
          <main className="min-h-screen">
            <div className="h-24 px-2 text-center flex flex-col items-center justify-center font-medium font-heading text-4xl">
              Find a recipe
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Chapati..."
                className="block w-80 h-10 rounded-md border-gray-300 pl-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="h-96">
              <Carousel />
            </div>
            <div className="text-center font-medium font-curve text-4xl ">
              All recipes
            </div>
            <div className="m-4 p-2 grid grid-cols-1 gap-4 flex items-center justify-center md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3">
              <div
                className="relative"
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
                      <div
                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hover:cursor-pointer"
                        // onClick={handleFavourite}
                      >
                        <StarIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
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
                      <div
                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hover:cursor-pointer"
                        // onClick={handleFavourite}
                      >
                        <StarIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
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
                      <div
                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hover:cursor-pointer"
                        // onClick={handleFavourite}
                      >
                        <StarIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
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
                      <div
                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hover:cursor-pointer"
                        // onClick={handleFavourite}
                      >
                        <StarIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
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
                      <div
                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hover:cursor-pointer"
                        // onClick={handleFavourite}
                      >
                        <StarIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
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

export default Homepage;
