import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./context/ProductContext";
import CartContext from "./context/CartContext";
import Toastify from "./components/Toastify";
import AuthContext from "./context/AutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContext>
      <CartContext>
        <AuthContext>
          <Toastify />
          <App />
        </AuthContext>
      </CartContext>
    </ProductContext>
  </BrowserRouter>
);
