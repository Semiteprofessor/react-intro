import React, { useEffect } from "react";
import "./product.css";
import { Link } from "react-router-dom";
import ProductDetails from "./product-detail";
import { useTheme } from "../context/ThemeContext";

const Products = () => {
  const [products, setProducts] = React.useState([]);

  const { theme } = useTheme();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        console.log("Fetch attempt finished");
      }
    };
    fetchProducts();
  }, []);

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
