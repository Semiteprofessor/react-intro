import axios from "axios";
import { createContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      await axios("https://fakestoreapi.com/products", {
        method: "GET",
      Authorization: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Products fetched successfully");
        }
        setProduct(res.data);
      })
      .catch((error) => console.log(error.message));
    };
    fetchProduct()
  }, [])
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext)