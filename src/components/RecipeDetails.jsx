import React from "react";
import Sidebar from "./Sidebar";

function RecipeDetails() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-background2 bg-opacity-30">
          <main className="min-h-screen flex items-center justify-center">
            <div className="w-5/6  m-4 bg-white shadow-2xl rounded-md">
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
              <div className="h-96 w-full ">
                <p className="text-center text-2xl font-curve font-medium p-2">
                  Ingredients
                </p>
                <ul className="ml-8 font-serif text-lg font-light list-decimal">
                  <li>Ingredient 1</li>
                  <li>Ingredient 1</li>
                  <li>Ingredient 1</li>
                  <li>Ingredient 1</li>
                  <li>Ingredient 1</li>
                  <li>Ingredient 1</li>
                  <li>Ingredient 1</li>
                  <li>Ingredient 1</li>
                </ul>
              </div>
              <div className="h-96 w-full">
                <p className="text-center text-2xl font-curve font-medium p-2">
                  Cooking instructions
                </p>
                <ul className="ml-8 font-serif text-lg font-light list-disc">
                  <li>Step 1</li>
                  <li>Step 1</li>
                  <li>Step 1</li>
                  <li>Step 1</li>
                  <li>Step 1</li>
                  <li>Step 1</li>
                  <li>Step 1</li>
                  <li>Step 1</li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
