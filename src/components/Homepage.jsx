import React from "react";
import Sidebar from "./Sidebar";

function Homepage() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-background2 bg-opacity-30">
          <main>
            <div className="text-center font-medium font-curve text-4xl ">
              All recipes
            </div>
            <div className="border border-4 border-red-800 m-4 p-2 grid grid-cols-3 gap-4">
              <div className="text-center border border-4 border-red-800 h-96">
                card
              </div>
              <div className="text-center border border-4 border-red-800 h-96">
                card
              </div>
              <div className="text-center border border-4 border-red-800 h-96">
                card
              </div>
              <div className="text-center border border-4 border-red-800 h-96">
                card
              </div>
              <div className="text-center border border-4 border-red-800 h-96">
                card
              </div>
              <div className="text-center border border-4 border-red-800 h-96">
                card
              </div>
              <div className="text-center border border-4 border-red-800 h-96">
                card
              </div>
              <div className="text-center border border-4 border-red-800 h-96">
                card
              </div>
              <div className="text-center border border-4 border-red-800 h-96">
                card
              </div>
              <div className="text-center border border-4 border-red-800 h-96">
                card
              </div>
              <div className="text-center border border-4 border-red-800 h-96">
                card
              </div>
              <div className="text-center border border-4 border-red-800 h-96">
                card
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Homepage;
