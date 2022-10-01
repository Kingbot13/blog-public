import React from "react";
import { Nav } from "./components/Nav";
import { SideBar } from "./components/SideBar";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <SideBar />
      <Outlet />
    </div>
  );
}

export default App;
