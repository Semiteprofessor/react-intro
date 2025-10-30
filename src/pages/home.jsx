import React from "react";
import { Link } from "react-router-dom";
import Products from "./products";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Home page</h1>

      <Products />
    </div>
  );
};

export default Home;