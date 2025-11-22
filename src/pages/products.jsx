import React, { useEffect } from "react";
import "./product.css";
import { Link } from "react-router-dom";
import ProductDetails from "./product-detail";
import { useTheme } from "../context/ThemeContext";
import { useProduct } from "../context/ProductContext";

const Products = () => {

  const { theme } = useTheme();
  const { products } = useProduct();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#2e2e2e",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <div className="container">
        {products.map((product) => (
          <div className="posts" key={product.id}>
            <img
              src={product.image}
              alt="product-image"
              width={150}
              height={150}
            />
            <Link to={`/products/${product.id}`}>
              <h2>{product.title}</h2>
            </Link>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
