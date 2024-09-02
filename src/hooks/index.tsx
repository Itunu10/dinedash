import { useContext } from "react";
import { ModalContext } from "../context/modal";
import { ProductContext } from "../context/product";
import { AuthContext } from "../context/auth";
import { AppContext } from "../context/app";

export const useModal = () => {
  return useContext(ModalContext);
};

export const useProduct = () => {
  return useContext(ProductContext);
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useApp = () => {
  return useContext(AppContext);
};
