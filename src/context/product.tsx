import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { ObjectProps } from "../types";

const initialState = {
  data: {},
  setData: () => {},
};

export const ProductContext = createContext<{
  data: ObjectProps;
  setData: Dispatch<SetStateAction<ObjectProps>>;
}>(initialState);

const ProductProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [data, setData] = useState<ObjectProps>(initialState.data);
  const value = {
    data,
    setData,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
export default ProductProvider;
