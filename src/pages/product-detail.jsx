import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useProduct } from "../context/ProductContext";

const ProductDetails = () => {
  const { productId } = useParams();
    const { theme } = useTheme();
    const { products } = useProduct();

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
