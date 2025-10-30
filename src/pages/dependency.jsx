import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Dependency = () => {
  const [products, setProducts] = useState([]);

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
  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Dependency;
