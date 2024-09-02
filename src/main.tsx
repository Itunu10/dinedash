import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ModalProvider from "./context/modal.tsx";
import ProductProvider from "./context/product.tsx";
import AppProvider from "./context/app.tsx";
import { Provider } from "react-redux";
import { store } from "./store.tsx";
import AuthProvider from "./context/auth.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <ProductProvider>
          <AppProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </AppProvider>
        </ProductProvider>
      </ModalProvider>
    </Provider>
  </React.StrictMode>
);
