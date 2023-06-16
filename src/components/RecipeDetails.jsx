import React from "react";
import Sidebar from "./Sidebar";

function RecipeDetails() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-background2 bg-opacity-30">
          <main className="min-h-screen flex items-center justify-center">
            <div className="w-5/6  m-4 bg-blue-800  bg-opacity-40 shadow-lg rounded-md">
              <div className="h-60 w-full grid grid-cols-2">
                <img
                  src="https://cdn.britannica.com/86/145786-050-5BD27317/chef-cooking-restaurant-kitchen.jpg"
                  alt="recipes"
                  className="h-56 w-3/4 m-2 rounded-md "
                />
                <div className="h-56 m-2 rounded-md">
                  <p className="text-center text-2xl font-curve font-medium p-2">
                    Title
                  </p>
                  <p className="text-center text-lg font-curve font-medium p-2">
                    Country
                  </p>
                  <p className="text-center text-lg font-curve font-medium p-2">
                    Rating
                  </p>
                </div>
              </div>
              <div className="h-96 w-full bg-yellow-400"></div>
              <div className="h-96 w-full bg-yellow-600">
                Cooking instructions
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
