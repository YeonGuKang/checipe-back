import React from "react";
import { Link } from "react-router-dom";

console.log("run navi");

const Navigation = () => (
  console.log("run navi fc"),
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">My Profile</Link>
      </li>
    </ul>
  </nav>
);
export default Navigation;