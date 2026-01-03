import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartData, hideCart } = useContext(CartContext);

  return (
    <div
      className="position-fixed top-0 end-0 h-100 bg-white shadow-lg p-3"
      style={{ width: "320px", zIndex: 1050 }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Your Cart</h5>
        <button className="btn btn-sm btn-outline-danger" onClick={hideCart}>
          ✕
        </button>
      </div>

      <div style={{ overflowY: "auto", maxHeight: "90%" }}>
        {cartData.length === 0 && (
          <p className="text-muted small">Cart is empty</p>
        )}

        {cartData.map((item, index) => (
          <div key={index} className="border-bottom pb-2 mb-2">
            <h6 className="mb-1">{item.name}</h6>
            <p className="small mb-0">Price: ₹{item.price}</p>
            <p className="small mb-0">Size: {item.size}</p>
            <p className="small mb-0">Qty: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
