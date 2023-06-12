import "./App.css";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
