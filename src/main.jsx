import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductProvider from "./components/context/ProductContext";
import CartProvider from "./components/context/CartContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
    
  </React.StrictMode>
);
