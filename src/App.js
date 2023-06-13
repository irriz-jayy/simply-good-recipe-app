import { Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
