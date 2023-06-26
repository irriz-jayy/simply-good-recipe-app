import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Signin() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the login function with the entered username and password
      const { user, token } = await login(username, password);

      // Perform any additional logic after successful login, such as redirecting or storing the token
      console.log("Logged in:", user);
      console.log("Token:", token);

      // Clear the form fields
      setUsername("");
      setPassword("");
    } catch (error) {
      // Handle login errors, such as displaying an error message
      console.log("Login error:", error.message);
    }
  };

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
        <div className="bg-background2 bg-opacity-80 p-6 rounded-lg shadow-lg relative z-10">
          <form onSubmit={handleSubmit}>
            <p className="text-center text-3xl font-curve">Sign in</p>
            <p className="text-center font-curve">
              Don't have an account?{" "}
              <a href="/sign-up" className="text-purple-800">
                Sign up
              </a>
            </p>
            <label htmlFor="username" className="block mb-2 font-curve">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 mb-4 border rounded-md font-curve font-light"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password" className="block mb-2 font-curve">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mb-4 border rounded-md font-curve font-light"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-background2 border font-curve hover:bg-blue-800 hover:bg-opacity-30 text-font1 rounded"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div className="absolute inset-0 bg-background1 bg-opacity-50"></div>
    </div>
  );
}

export default Signin;
