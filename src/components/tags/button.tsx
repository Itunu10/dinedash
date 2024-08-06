import { ButtonPropsTypes } from "../../types";

const buttonMode = {
  primary: "bg-primary-default  text-white",
  dark: "border-gray-300 border bg-white text-gray-800",
  danger: "",
  light: "text-primary-default bg-primary-light",
  default: "bg-transparent border text-primary-default border-primary-default",
};

const ButtonComponent: React.FC<ButtonPropsTypes> = ({
  children,
  mode = "primary",
  width = "w-full",
  ...buttonProps
}) => {
  return (
    <button
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
      className={` px-3 py-2 rounded-md ${width} ${buttonMode[mode]} disabled:text-white disabled:font-semibold disabled:bg-gray-300 hover:opacity-80 disabled:border-gray-400 disabled:cursor-not-allowed hover:shadow-sm transition-all  ${buttonProps.className}`}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
