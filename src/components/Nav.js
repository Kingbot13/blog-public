import React from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <NavLink to='/sign-up'>Sign Up</NavLink>
      <NavLink to='/log-in'>Log In</NavLink>
    </nav>);
};
