import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Home page</h1>

      <Link to="/register">
        <button>Go to Register page</button>
      </Link>
    </div>
  );
};

export default Home;