import React from "react";

function Signin() {
  return (
    <div
      className="h-screen relative"
      style={{
        backgroundImage:
          "url(https://assets.bonappetit.com/photos/5e7a6c79edf206000862e452/16:9/w_2580,c_limit/Cooking-Home-Collection.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="h-screen flex items-center justify-center">
        <div className="bg-background1 bg-opacity-80 p-6 rounded-lg shadow-lg relative z-10">
          <form>
            <p className="text-center text-3xl font-curve">Sign up</p>
            <p className="text-center font-curve">
              Already have an account?{" "}
              <a href="/sign-in" className="text-purple-800">
                Log in
              </a>
            </p>
            <label htmlFor="email" className="block mb-2 font-curve">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-3 py-2 mb-4 border rounded-md font-curve font-light"
            />
            <label htmlFor="name" className="block mb-2 font-curve">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 mb-4 border rounded-md font-curve font-light"
            />
            <label htmlFor="profile-picture" className="block mb-2 font-curve">
              Profile Picture
            </label>
            <input
              type="file"
              id="pfp"
              className="w-full px-3 py-2 mb-4 border rounded-md font-curve font-light"
            />
            <label htmlFor="password" className="block mb-2 font-curve">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mb-4 border rounded-md font-curve font-light"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-background1 border font-curve hover:bg-blue-800 hover:bg-opacity-30 text-font1 rounded"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="absolute inset-0 bg-background1 bg-opacity-50"></div>
    </div>
  );
}

export default Signin;
