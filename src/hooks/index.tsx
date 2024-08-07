import { useContext } from "react";
import { ModalContext } from "../components/context/modal";
import { ProductContext } from "../components/context/product";

export const useModal = () => {
  return useContext(ModalContext);
};

export const useProduct = () => {
  return useContext(ProductContext);
};
