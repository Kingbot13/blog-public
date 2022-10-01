import React from "react";
import { Nav } from "./components/Nav";
import { SideBar } from "./components/SideBar";
import { Outlet, useLoaderData } from "react-router-dom";
import { data } from "./data";
import "./App.css";

export async function loader() {
  const postsData = await data.getPosts();
  return { postsData };
}

function App() {
  const { postsData } = useLoaderData();
  return (
    <div className="App">
      <Nav />
      <SideBar posts={postsData.posts} />
      <Outlet />
    </div>
  );
}

export default App;
