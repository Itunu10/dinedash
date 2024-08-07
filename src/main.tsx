import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ModalProvider from "./components/context/modal.tsx";
import ProductProvider from "./components/context/product.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </ModalProvider>
  </React.StrictMode>
);
