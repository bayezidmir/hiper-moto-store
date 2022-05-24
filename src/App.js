import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="mx-auto container ">
      <Home />
      <Routes></Routes>
    </div>
  );
}

export default App;
