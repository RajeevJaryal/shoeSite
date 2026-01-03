import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const ProductShow = () => {
  const { products, decreaseSizeStock} = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const handleAdd = (shoe, size) => {
    addToCart(shoe, size);
    decreaseSizeStock(shoe.id, size);
  };

  return (
    <div className="row g-3">
      {products.map((shoe) => (
        <div key={shoe.id} className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h6>{shoe.name}</h6>
            <p className="small text-muted">{shoe.description}</p>
            <p className="fw-bold">₹ {shoe.price}</p>

            <div className="d-flex gap-2">
              <button
                className="btn btn-outline-dark btn-sm"
                disabled={shoe.sizes.S === 0}
                onClick={() => handleAdd(shoe, "S")}
              >
                S ({shoe.sizes.S})
              </button>

              <button
                className="btn btn-outline-dark btn-sm"
                disabled={shoe.sizes.M === 0}
                onClick={() => handleAdd(shoe, "M")}
              >
                M ({shoe.sizes.M})
              </button>

              <button
                className="btn btn-outline-dark btn-sm"
                disabled={shoe.sizes.L === 0}
                onClick={() => handleAdd(shoe, "L")}
              >
                L ({shoe.sizes.L})
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductShow;
