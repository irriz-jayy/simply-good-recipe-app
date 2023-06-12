import React from "react";
import Sidebar from "./Sidebar";

function Profile() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <main>
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  My Profile
                </h1>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="py-4">
                  <div className="h-96 rounded-lg border-4  border-gray-200 flex">
                    <img className="h-full w-1/4" src="" />
                    <div className="grid grid-cols-2 border border-red-800 w-3/4">
                      <div className="col-span-2">name</div>
                      <div>Recipes</div>
                      <div>stars</div>
                    </div>
                  </div>
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Profile;
