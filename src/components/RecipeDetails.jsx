import React from "react";
import Sidebar from "./Sidebar";
import { StarIcon } from "@heroicons/react/24/outline";

function RecipeDetails() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-white">
          <main className="min-h-screen">
            <div className="h-[100vh] flex flex-col lg:flex-row p-2">
              <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col items-center justify-center">
                <p className="text-3xl font-heading text-font2">Name</p>
                <p className="font-paragraph">Country</p>
                <p className="m-4 w-36 h-12 flex items-center justify-center">
                  <StarIcon className="h-6 w-6 text-black" />
                  <StarIcon className="h-6 w-6 text-black" />
                  <StarIcon className="h-6 w-6 text-black" />
                  <StarIcon className="h-6 w-6 text-black" />
                  <StarIcon className="h-6 w-6 text-black" />
                </p>
                <button className="flex items-center justify-center border w-28 px-4 py-2 bg-background2 border font-curve hover:bg-background2 hover:bg-opacity-50 text-font1 rounded">
                  <StarIcon className="h-6 w-6 text-black" /> Favourite
                </button>
              </div>
              <img
                src="https://cdn.britannica.com/86/145786-050-5BD27317/chef-cooking-restaurant-kitchen.jpg"
                alt=""
                className="w-full h-1/2 lg:w-1/2 lg:h-full"
              />
            </div>
            <div className="min-h-[75vh] p-2 flex flex-col items-center justify-center">
              <div className="w-5/6 min-h-[50vh]">
                <h2 className="text-2xl h-12 my-4 font-heading text-font2">
                  Ingredients
                </h2>
                <ul className="font-paragraph text-font1 list-disc">
                  <li className="p-2">Ingredient 1</li>
                  <li className="p-2">Ingredient 2</li>
                  <li className="p-2">Ingredient 3</li>
                  <li className="p-2">Ingredient 4</li>
                  <li className="p-2">Ingredient 5</li>
                  <li className="p-2">Ingredient 6</li>
                  <li className="p-2">Ingredient 7</li>
                  <li className="p-2">Ingredient 8</li>
                </ul>
              </div>
            </div>
            <div className="min-h-[75vh] p-2 flex flex-col items-center justify-center">
              <div className="w-5/6 min-h-[50vh]">
                <h2 className="text-2xl h-12 my-4 font-heading text-font2">
                  Reviews
                </h2>
                <div className="flex w-full border items-center">
                  <img
                    src=""
                    alt=""
                    className="h-20 w-20 rounded-full border border-red-800"
                  />
                  <input
                    type="text"
                    className="h-12 w-3/4 border ml-4 pl-4 font-paragraph overflow-wrap break-word"
                    placeholder="Leave your review or comment here..."
                  />
                </div>
                <div className="border mt-4 p-2 w-full ">
                  <ul className="flex items-center mt-4">
                    <li>
                      <img
                        src=""
                        alt=""
                        className="h-20 w-20 rounded-full border border-red-800"
                      />
                    </li>
                    <li className="h-12 w-3/4 border ml-4 pl-4 font-paragraph overflow-wrap">
                      <p className="text-font1 font-paragraph">Review</p>
                    </li>
                  </ul>
                  <ul className="flex items-center mt-4">
                    <li>
                      <img
                        src=""
                        alt=""
                        className="h-20 w-20 rounded-full border border-red-800"
                      />
                    </li>
                    <li className="h-12 w-3/4 border ml-4 pl-4 font-paragraph overflow-wrap">
                      <p className="text-font1 font-paragraph">Review</p>
                    </li>
                  </ul>
                  <ul className="flex items-center mt-4">
                    <li>
                      <img
                        src=""
                        alt=""
                        className="h-20 w-20 rounded-full border border-red-800"
                      />
                    </li>
                    <li className="h-12 w-3/4 border ml-4 pl-4 font-paragraph overflow-wrap">
                      <p className="text-font1 font-paragraph">Review</p>
                    </li>
                  </ul>
                  <ul className="flex items-center mt-4">
                    <li>
                      <img
                        src=""
                        alt=""
                        className="h-20 w-20 rounded-full border border-red-800"
                      />
                    </li>
                    <li className="h-12 w-3/4 border ml-4 pl-4 font-paragraph overflow-wrap">
                      <p className="text-font1 font-paragraph">Review</p>
                    </li>
                  </ul>
                  <ul className="flex items-center mt-4">
                    <li>
                      <img
                        src=""
                        alt=""
                        className="h-20 w-20 rounded-full border border-red-800"
                      />
                    </li>
                    <li className="h-12 w-3/4 border ml-4 pl-4 font-paragraph overflow-wrap">
                      <p className="text-font1 font-paragraph">Review</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
