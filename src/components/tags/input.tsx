import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
// import { InputPropsTypes, Obj } from "../../types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { InputPropsTypes, ObjectProps } from "../../types";
import { validate } from "../../utils/validate";
import { useApp } from "../../hooks";

import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const inputMode = {
  light: "border-dark-lighter focus:border-gray-500",
  dark: "border-transparent focus:border-dark-default bg-primary-light ",
  primary: "border-primary-default focus:border-primary-default ",
};

export const TextInputComponent: React.FC<
  InputPropsTypes<ObjectProps | any>
> = ({
  label,
  setValues,
  values,
  mode = "primary",
  width = "w-full",
  actionButton,
  showValidate = true,
  ...inputProps
}) => {
  const [isTouched, setIsTouched] = useState(false);
  const [errorObject, setErrorObject] = useState<ObjectProps>({});

  const { app, setApp } = useApp();

  useEffect(() => {
    setApp({
      ...app,
      error: Object.keys(errorObject).length > 0 ? errorObject : undefined,
    });
  }, [errorObject]);

  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setIsTouched(true);
    if (showValidate) {
      const error = validate(e.target.name, values);
      error &&
        Object.values(error).length >= 1 &&
        setErrorObject((prevErrorObject: ObjectProps) => ({
          ...prevErrorObject,
          [e.target.name]: error[e.target.name],
        }));
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues: ObjectProps) => ({
      ...prevValues,
      [inputProps.name]: e.target?.value,
    }));
    if (showValidate) {
      if (isTouched) {
        const error = validate(e.target.name, values);

        error &&
          Object.values(error).length >= 1 &&
          setErrorObject((prevErrorObject: ObjectProps) => ({
            ...prevErrorObject,
            [e.target.name]: error[e.target.name],
          }));
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-gray-700 font-medium text-base">{label}</label>
      )}
      <div className="flex  items-center gap-2">
        <input
          {...inputProps}
          onChange={onChange}
          name={inputProps.name}
          defaultValue={inputProps.defaultValue}
          type={inputProps.type}
          value={values[inputProps.name]}
          placeholder={inputProps.placeholder}
          onBlur={onBlur}
          className={`p-2 rounded-md ${width} placeholder:text-sm   outline-none border border-1 ${inputMode[mode]} focus:border-[0.09rem] ${inputProps.className} `}
        />
        {actionButton}
      </div>

      {errorObject && errorObject[inputProps?.name] && (
        <p className="text-red-500 text-sm">{errorObject[inputProps.name]}</p>
      )}
    </div>
  );
};

interface RadioInputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

export const RadioInputComponent: React.FC<RadioInputProps> = ({
  label,
  name,
}) => {
  return (
    <div className="flex gap-3 items-center">
      {" "}
      <input
        name={name}
        className="ring-[0.07rem] cursor-pointer ring-[#D0D5DD] duration-200 checked:ring-primary-default checked:border-[0.2rem] checked:border-white appearance-none p-1.5 rounded-md checked:bg-primary-default "
        // className="appearance-none border-[0.09rem] h-6 w-6 p-2 checked:bg-primary-default rounded-full  border-slate-600"
        type="radio"
      />{" "}
      {label && (
        <label
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: label }}
        />
      )}
    </div>
  );
};

interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  rows?: number;
  cols?: number;
  values: { [key: string]: any };
  setValues: Dispatch<SetStateAction<{ [key: string]: any }>>;
  placeholder?: string;
}

export const TextAreaComponent: React.FC<TextAreaProps> = ({
  label,
  rows = 5,
  cols = 30,
  values,
  setValues,
  placeholder,
  ...inputProps
}) => {
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, [inputProps.name]: e.target?.value });
  };
  return (
    <div className="flex flex-col gap-2">
      {label && <label>{label}</label>}{" "}
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        className="p-2 border-gray-300 outline-none border-[0.05rem] focus:border-dark-default focus:border-[0.09rem]  rounded-md"
        rows={rows}
        cols={cols}
      />
    </div>
  );
};

interface SelectMenuComponentProps<T extends ObjectProps> {
  menus: T[];
  initialValue?: string;
  width?: string;
  label?: string;
  values: ObjectProps;
  setValues: Dispatch<SetStateAction<ObjectProps | any>>;
  name: string;
  handleInputChange?: (name: string, value: string) => void;
  clickHandler?: () => void;
}

export const SelectMenuComponent = <T extends ObjectProps>({
  menus = [],
  initialValue = "select item",
  width = "w-full",
  label,
  values,
  setValues,
  name,
  handleInputChange,
  clickHandler,
}: SelectMenuComponentProps<T>) => {
  const [menuValue, setMenuValue] = useState(initialValue);

  const onClick = (value: string, label: string) => {
    setMenuValue(label);
    handleInputChange && handleInputChange(name, value);
    setValues({ ...values, [name]: value });
  };
  return (
    <div onClick={clickHandler} className="flex items-center gap-4">
      <Menu direction="rtl">
        {({ isOpen }) => (
          <>
            <div className={`flex ${width} gap-2 flex-col`}>
              {label && (
                <label className="text-gray-700 font-medium text-base">
                  {label}
                </label>
              )}
              <MenuButton
                isActive={isOpen}
                as={Button}
                // colorScheme="white"
                bgColor={"white"}
                _hover={{ bgColor: "white" }}
                width={"100%"}
                className="border flex gap-3 bg-white text-gray-800 border-slate-400"
              >
                <Flex justify="space-between" className="w-full" align="center">
                  <Box> {menuValue}</Box>
                  <Icon icon="ph:caret-down" flip="top" />
                </Flex>

                {/* {isOpen ?  : "Open"} */}
              </MenuButton>

              <div className="max-h-64 overflow-y-scroll">
                {" "}
                <MenuList className="max-h-64 overflow-y-scroll" w="100% ">
                  {menus.map((menu) => (
                    <MenuItem
                      key={menu.value}
                      onClick={() => {
                        onClick(menu.value, menu.label);
                      }}
                    >
                      {menu.label}
                    </MenuItem>
                  ))}
                </MenuList>
              </div>
            </div>
          </>
        )}
      </Menu>
    </div>
  );
};

interface CheckBoxProps {
  isChecked: { [key: string]: boolean };
  setIsChecked: Dispatch<SetStateAction<{ [key: string]: boolean }>>;
  name: string;
}

export const CheckBoxInputComponent: React.FC<CheckBoxProps> = ({
  isChecked,
  setIsChecked,
  name,
}) => {
  const handleCheckButton = () => {
    setIsChecked({ ...isChecked, [name]: !isChecked[name] });
  };
  return (
    <div className="text-primary-default">
      {isChecked[name] ? (
        <span
          onClick={handleCheckButton}
          className="text-primary-default cursor-pointer"
        >
          {" "}
          <Icon icon="mdi:checkbox-outline" />
        </span>
      ) : (
        <span
          onClick={handleCheckButton}
          className="text-slate-500 cursor-pointer"
        >
          <Icon icon="mdi:checkbox-blank-outline" />
        </span>
      )}
    </div>
  );
};
