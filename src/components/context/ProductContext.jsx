import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };
  const decreaseSizeStock = (productId, size) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? {
              ...product,
              sizes: {
                ...product.sizes,
                [size]: product.sizes[size] - 1,
              },
            }
          : product
      )
    );
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, decreaseSizeStock }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
