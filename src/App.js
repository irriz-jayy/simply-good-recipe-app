import { Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import Homepage from "./components/Homepage";
import Saved from "./components/Saved";
import Recipes from "./components/Recipes";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/recipe-details" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
