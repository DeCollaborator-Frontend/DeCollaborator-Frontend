import exp from "constants";
import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const CollabContext = createContext();

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
      posted_on: new Date().toISOString(),
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

export const CollabProvider = ({ children }) => {
  const [collabDetails, setCollabDetails] = useState({
    provider: "",
    role: "",
    location: "Lagos, Nigeria",
    type: "",
    is_escrow: null,
    is_paid: null,
    is_full_time: null,
    description: "",
    tags: [],
  });

  const resetCollabDetails = () => {
    setCollabDetails({
      provider: "",
      role: "",
      location: "Lagos, Nigeria",
      price: "",
      type: "",
      is_escrow: null,
      is_paid: null,
      is_full_time: null,
      description: "",
      tags: [],
    });
  };

  const [allCollabs, setAllCollabs] = useState([]);

  const addCollab = () => {
    const newCollab = {
      ...collabDetails,
      id: Date.now(),
      num_applications: Math.floor(Math.random() * 10000),
      posted_on: new Date().toLocaleDateString(),
    };
    setAllCollabs([...allCollabs, newCollab]);
    resetCollabDetails();
  };

  const updateCollab = () => {
    setAllCollabs((prevCollabs) =>
      prevCollabs.map((collab) =>
        collab.id === collabDetails.id ? collabDetails : collab,
      ),
    );
    resetCollabDetails();
  };

  const deleteCollab = (id) => {
    setAllCollabs((prevCollabs) =>
      prevCollabs.filter((collab) => collab.id !== id),
    );
  };

  return (
    <CollabContext.Provider
      value={{
        collabDetails,
        setCollabDetails,
        allCollabs,
        addCollab,
        updateCollab,
        deleteCollab,
      }}
    >
      {children}
    </CollabContext.Provider>
  );
};
