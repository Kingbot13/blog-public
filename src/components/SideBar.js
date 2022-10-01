import React from "react";
import { Link } from "react-router-dom";

export const SideBar = ({ posts }) => {
  return (
    <ul>
      {posts
        ? posts.map((post) => (
            <li key={post._id}>
              <Link to={`/posts/${post._id}`}></Link>
            </li>
          ))
        : "No Posts"}
    </ul>
  );
};
