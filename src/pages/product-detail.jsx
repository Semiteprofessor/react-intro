import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const ProductDetails = () => {
  const { productId } = useParams();
    const { theme } = useTheme();

  const [products, setProducts] = React.useState([]);

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

  console.log(products);

  const product = products.find((product) => product.id === parseInt(productId));

  if (!product) {
    return (
      <div>
        <h2>Product not found!</h2>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <img src={product.image} alt="product-image" width={400} />
      <h2>{product.title}</h2>
      <h3>{product.price}</h3>
      <p>{product.description}</p>
      <h4>{product.category}</h4>
    </div>
  );
};

export default ProductDetails;
