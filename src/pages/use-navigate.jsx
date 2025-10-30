import React from "react";
import { useNavigate } from "react-router-dom";

const Navigate = () => {
  const navigate = useNavigate();

  //   const navigateToHome = () => {
  //     navigate("/");
  //   };

  return (
    <div>
      <button onClick={() => navigate("/")}>Go to Home page</button>
    </div>
  );
};

export default Navigate;
