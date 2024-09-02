import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { ObjectProps } from "../types";

interface AppProps {
  error: ObjectProps | undefined;
  file: null | File;
}

export interface AppContextProps {
  app: AppProps;
  setApp: Dispatch<SetStateAction<AppProps>>;
}

const initialState: AppContextProps = {
  app: {
    error: undefined,
    file: null,
  },
  setApp: () => {},
};

export const AppContext = createContext<AppContextProps>(initialState);

const AppProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [app, setApp] = useState(initialState.app);
  const value = {
    app,
    setApp,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppProvider;
