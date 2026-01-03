import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const [cartShow, setCartShow] = useState(false);

  const showCart = () => {
    setCartShow(true);
  };
  const hideCart = () => {
    setCartShow(false);
  };
  const addToCart = (product, size) => {
    setCartData((prev) => {
      const existItems = prev.find(
        (items) => items.id === product.id && items.size === size
      );

      if (existItems) {
        return prev.map((items) =>
          items.id === product.id && items.size === size
            ? { ...items, quantity: items.quantity + 1 }
            : items
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          size,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <CartContext.Provider
      value={{ cartData, addToCart, showCart, hideCart, cartShow }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
