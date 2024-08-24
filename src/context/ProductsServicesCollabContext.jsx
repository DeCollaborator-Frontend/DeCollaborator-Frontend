import React, { createContext, useState } from "react";

// Create the context
export const ProductContext = createContext();

// Create a provider component
export const ProductProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    about: "",
    tags: [],
    price: 0,
    rating: 0,
    src: null,
  });

  const [allProducts, setAllProducts] = useState([]);

  const addProduct = () => {
    setAllProducts([...allProducts, productDetails]); // Add the current product to the array
  };

  return (
    <ProductContext.Provider
      value={{ productDetails, setProductDetails, allProducts, addProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
