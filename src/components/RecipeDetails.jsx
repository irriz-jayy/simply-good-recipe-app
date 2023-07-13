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
            <div className="h-[85vh] flex flex-col lg:flex-row p-2 lg:items-center lg:justify-center ">
              <div className="w-1/2 h-3/4 ml-4 border flex items-center justify-center">
                <div className="w-5/6 h-5/6 border flex flex-col items-center justify-center rounded-md text-center">
                  <p className="text-2xl font-curve text-font2">Name</p>
                  <p className="text-xl font-heading">Country of origin</p>
                  <p className="text-lg font-heading">Serves x people</p>
                  <p className="font-paragraph text-gray-500">Time</p>
                </div>
              </div>
              <div className="w-1/2 h-3/4 mr-4 border flex items-center justify-center ">
                <img
                  src="https://recipes.net/wp-content/uploads/portal_files/recipes_net_posts/2021-08/kiwi-berry-cake-recipe-1024x563.jpg"
                  alt=""
                  className="w-5/6 h-5/6 border rounded-md"
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <hr className="w-5/6" />
            </div>
            <div className="min-h-[70vh] flex flex items-center justify-center">
              <div className="w-5/6 min-h-[50vh] ">
                <p className="text-2xl p-2 text-left font-heading text-font2 ">
                  Description
                </p>
                <p className="font-paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Soluta obcaecati dignissimos tempore sunt doloribus quidem
                  corporis numquam optio, facere pariatur consequatur quae
                  officiis tempora sed perspiciatis! Sapiente culpa explicabo
                  possimus?
                </p>
                <p className="text-2xl p-2 text-left font-heading text-font2 ">
                  Ingredients
                </p>
                <ul className="list-disc p-2">
                  <li>Ingredient 1</li>
                  <li>Ingredient 2</li>
                  <li>Ingredient 3</li>
                  <li>Ingredient 4</li>
                  <li>Ingredient 5</li>
                  <li>Ingredient 6</li>
                  <li>Ingredient 7</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <hr className="w-5/6" />
            </div>
            <div className="min-h-[70vh] flex flex items-center justify-center">
              <div className="w-5/6 min-h-[50vh] ">
                <p className="text-2xl p-2 text-left font-heading text-font2">
                  Directions
                </p>
                <ul className="list-disc p-2">
                  <li>Direction 1</li>
                  <li>Direction 2</li>
                  <li>Direction 3</li>
                  <li>Direction 4</li>
                  <li>Direction 5</li>
                  <li>Direction 6</li>
                  <li>Direction 7</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <hr className="w-5/6" />
            </div>
            <div className="min-h-[70vh] flex flex items-center justify-center">
              <div className="w-5/6 min-h-[50vh] ">
                <p className="text-2xl p-2 text-left font-heading text-font2">
                  Reviews
                </p>
                <div className="flex w-full  items-center">
                  <img
                    src="https://thekit.ca/wp-content/uploads/2016/05/hairshape-carousel-thekit.ca_.jpg"
                    alt=""
                    className="h-20 w-20 rounded-full"
                  />
                  <input
                    type="text"
                    className="h-12 w-3/4  ml-4 pl-4 font-paragraph overflow-wrap break-word"
                    placeholder="Leave your review or comment here..."
                  />
                </div>
                <div className="mt-4 p-2 w-full ">
                  <ul className="flex items-center mt-4">
                    <li>
                      <img
                        src="https://images.healthshots.com/healthshots/en/uploads/2022/07/01225819/banana-face-mask-1600x900.jpg"
                        alt=""
                        className="h-20 w-20 rounded-full"
                      />
                    </li>
                    <li className="h-12 w-3/4  ml-4 pl-4 font-paragraph overflow-wrap">
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
