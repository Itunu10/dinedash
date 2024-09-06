import { AxiosResponse } from "axios";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface AuthHeaderProps {
  title: string;
  subTitle: string;
  header: string;
}

export interface PageContextProps {
  authHeader: AuthHeaderProps;
  setAuthHeader: React.Dispatch<React.SetStateAction<AuthHeaderProps>>;
}

export interface ObjectProps {
  [key: string]: any;
}

type SetValuesType<T> = Dispatch<SetStateAction<T>>;

export interface ValidationRule {
  pattern: RegExp;
  message: string;
}

export interface InputPropsTypes<T>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  setValues: Dispatch<SetStateAction<SetValuesType<T>>>;
  values: { [key: string]: any };
  mode?: "dark" | "primary" | "light";
  name: string;
  actionButton?: ReactNode;
  customValidation?: ValidationRule[];
  handleInputChange?: (name: string, value: string) => void;
  formErrors?: ObjectProps;
  showValidate?: boolean;
}

export interface ButtonPropsTypes
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: "dark" | "primary" | "light" | "danger" | "default";
  width?: string;
  isLoading?: boolean;
}

export interface QueryResponse extends AxiosResponse {
  docs: any[];
  docsTotal: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}

export interface UpdateTypeProps {
  credentials: ObjectProps;
  id: string;
}

export type ModalType = {
  isOpenCard: boolean;
  isOpenAddCategory: boolean;
  isOpenAddMenu: boolean;
  isOpenDelete: boolean;
  isOpenRename: boolean;
  isOpenMakeOrder: boolean;
  isOpenApprovePayment: boolean;
};

export interface ModalContextProps {
  modal: ModalType;
  setModal: React.Dispatch<SetStateAction<ModalType>>;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse extends AxiosResponse {
  token: string;
}
