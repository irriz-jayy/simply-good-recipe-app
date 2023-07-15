import React from "react";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import Carousel from "./Carousel";
import { fetchRecipes } from "../api/recipe";

function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [hoveredIndexes, setHoveredIndexes] = useState([]);

  useEffect(() => {
    const fetchRecipesData = async () => {
      try {
        const recipesData = await fetchRecipes();
        console.log("Fetched recipes:", recipesData);
        setRecipes(recipesData);
        setHoveredIndexes(Array(recipesData.length).fill(false));
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipesData();
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndexes((prevIndexes) =>
      prevIndexes.map((hovered, i) => (i === index ? true : hovered))
    );
  };

  const handleMouseLeave = (index) => {
    setHoveredIndexes((prevIndexes) =>
      prevIndexes.map((hovered, i) => (i === index ? false : hovered))
    );
  };

  const handleTouchStart = (index) => {
    setHoveredIndexes((prevIndexes) =>
      prevIndexes.map((hovered, i) => (i === index ? true : hovered))
    );
  };

  const handleTouchEnd = (index) => {
    setHoveredIndexes((prevIndexes) =>
      prevIndexes.map((hovered, i) => (i === index ? false : hovered))
    );
  };
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-background1">
          <main className="min-h-screen">
            <div className="h-[25vh] px-2 bg-cover bg-center bg-[url('https://images.pexels.com/photos/4040691/pexels-photo-4040691.jpeg?auto=compress&cs=tinysrgb&w=400')]text-center text-font2 flex flex-col items-center justify-center font-medium font-heading text-4xl">
              Find a recipe
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for 100K+ recipes"
                className="block w-80 h-10 rounded-md border-gray-300 pl-2 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="h-[75vh]">
              <Carousel />
            </div>
            <div className="text-left font-medium font-curve text-2xl flex items-center text-font2 ml-4 h-12">
              Just for you
            </div>
            {/* recipe card model */}
            <div className="m-4 p-2 grid grid-cols-1 gap-4 flex items-center justify-center md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3">
              {recipes.map((recipe, index) => (
                <div
                  key={recipe.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onTouchStart={() => handleTouchStart(index)}
                  onTouchEnd={() => handleTouchEnd(index)}
                >
                  <img
                    src={recipe.image_url}
                    alt=""
                    className="w-full h-full object-cover"
                  />

                  {hoveredIndexes[index] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:cursor-pointer">
                      <div className="text-white text-center font-curve">
                        <h3 className="text-xl font-semibold mb-2">
                          {recipe.name}
                        </h3>
                        <p>{recipe.description}</p>
                        <p>Time: {recipe.time}</p>
                        <p>Servings: {recipe.number_of_people_served}</p>
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hover:cursor-pointer">
                          <StarIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>{" "}
          </main>
        </div>
      </div>
    </>
  );
}

export default Homepage;
