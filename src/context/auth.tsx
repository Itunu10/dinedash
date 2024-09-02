import {
  useState,
  createContext,
  useMemo,
  useCallback,
  ReactNode,
  useEffect,
} from "react";
import { useLoginMutation } from "../features/auth";
import { instance } from "../api/client";
import { LoginRequest } from "../types";

export interface AuthProps {
  token: string | null;
  //   createToken: (token: string) => void;
  login: (credentials: LoginRequest) => Promise<void> | any;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const initialState = {
  token: localStorage.getItem("token"),
  login: async () => {},
  logout: async () => {},
  isAuthenticated: false,
};

export const AuthContext = createContext<AuthProps>(initialState);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("dinedash-token")
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("dinedash-token", token);
    } else {
      localStorage.removeItem("dinedash-token");
    }
  }, [token]);

  const [login] = useLoginMutation();

  const handleLogin = useCallback(
    async (credentials: LoginRequest) => {
      const response = await login(credentials).unwrap();

      setToken(response.data.token);

      localStorage.setItem("dinedash-token", response.data.token);
      setToken(response.data.token);
      instance.defaults.headers.common[
        "Authorization"
      ] = `${response.data.token}`;

      return response.data;
    },
    [login]
  );

  const handleLogout = useCallback(async () => {
    localStorage.removeItem("dinedash-token");
    localStorage.removeItem("organizational-source");
    setToken(null);
    delete instance.defaults.headers.common["Authorization"];
  }, []);

  const contextValue = useMemo(
    () => ({
      token,
      login: handleLogin,
      logout: handleLogout,
      isAuthenticated: !!token,
    }),
    [token, handleLogin, handleLogout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
