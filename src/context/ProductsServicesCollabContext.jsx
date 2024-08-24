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
    manufacturer: "",
    link: "",
    src: null,
  });

  const resetProductDetails = () => {
    setProductDetails({
      name: "",
      about: "",
      tags: [],
      price: 0,
      manufacturer: "",
      link: "",
      src: null,
    });
  };

  const [allProducts, setAllProducts] = useState([]);

  const addProduct = () => {
    const newProduct = {
      ...productDetails,
      id: Date.now(),
      rating: Math.floor(Math.random() * 5),
    };
    setAllProducts([...allProducts, newProduct]);
    resetProductDetails();
  };

  const updateProduct = () => {
    setAllProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productDetails.id ? productDetails : product,
      ),
    );
    resetProductDetails();
  };

  const deleteProduct = (id) => {
    setAllProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id),
    );
  };

  return (
    <ProductContext.Provider
      value={{
        productDetails,
        setProductDetails,
        allProducts,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
