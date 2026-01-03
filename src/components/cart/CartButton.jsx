import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartButton = () => {
  const { cartData, showCart } = useContext(CartContext);

  const totalItems = cartData.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <button className="btn btn-light position-relative" onClick={showCart}>
      Cart
      {totalItems > 0 && (
        <span className="badge bg-dark position-absolute top-0 start-100 translate-middle">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default CartButton;
