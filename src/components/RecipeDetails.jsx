import React from "react";
import Sidebar from "./Sidebar";

function RecipeDetails() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-background2 bg-opacity-30">
          <main className="min-h-screen flex items-center justify-center">
            <div className="w-5/6 bg-white border border-red-800 m-4">
              <div className="h-48 w-full bg-red-800">image and name</div>
              <div className="h-96 w-full bg-yellow-400">Details</div>
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
