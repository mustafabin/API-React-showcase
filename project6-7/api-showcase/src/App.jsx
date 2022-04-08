import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Landing/Home.jsx";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/test" element={<h1>test</h1>}></Route>
        <Route path="*" element={<h1>wrong link bozo</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
