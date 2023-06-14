import React from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { PencilIcon, TrashIcon, StarIcon } from "@heroicons/react/24/outline";

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

  const handleClick = () => {
    console.log("click");
  };

  const handleDelete = (event) => {
    event.stopPropagation();
    console.log("delete");
  };

  const handleFavourite = (event) => {
    event.stopPropagation();
    console.log("favourite");
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    console.log("edit");
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
                onClick={handleClick}
              >
                <img
                  src="https://cdn.britannica.com/86/145786-050-5BD27317/chef-cooking-restaurant-kitchen.jpg"
                  alt=""
                  className="w-full h-full object-cover "
                />

                {isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 flex-col hover:cursor-pointer">
                    <div className="text-white text-center font-curve">
                      <h3 className="text-xl font-semibold mb-2">
                        Recipe name
                      </h3>
                      <p>description</p>
                      <p>time</p>
                      <p>servings</p>
                    </div>
                    <div
                      className="absolute bottom-6 left-6 hover:cursor-pointer"
                      onClick={handleEdit}
                    >
                      <PencilIcon className="h-6 w-6 text-white" />
                    </div>
                    <div
                      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hover:cursor-pointer"
                      onClick={handleFavourite}
                    >
                      <StarIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div
                      className="absolute bottom-6 right-6 hover:cursor-pointer"
                      onClick={handleDelete}
                    >
                      <TrashIcon className="h-6 w-6 text-white" />
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

export default Recipes;