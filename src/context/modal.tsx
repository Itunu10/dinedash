import { createContext, ReactNode, useState } from "react";
import { ModalContextProps } from "../types";

const initialState = {
  modal: {
    isOpenCard: false,
    isOpenAddCategory: false,
    isOpenAddMenu: false,
    isOpenDelete: false,
    isOpenRename: false,
  },
  setModal: () => {},
};

export const ModalContext = createContext<ModalContextProps>(initialState);

const ModalProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [modal, setModal] = useState(initialState.modal);
  const value = {
    modal,
    setModal,
  };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
export default ModalProvider;
