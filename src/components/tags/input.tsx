import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
// import { InputPropsTypes, Obj } from "../../types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { InputPropsTypes, ObjectProps } from "../../types";

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
  handleInputChange,
  formErrors,
  ...inputProps
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues: ObjectProps) => ({
      ...prevValues,
      [inputProps.name]: e.target?.value,
    }));
    handleInputChange && handleInputChange(e.target.name, e.target.value);
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
          className={`p-2 rounded-md ${width} placeholder:text-sm   outline-none border border-1 ${inputMode[mode]} focus:border-[0.09rem] ${inputProps.className} `}
        />
        {actionButton}
      </div>

      {formErrors &&
        Object.values(formErrors).filter((err) => !err.isValid).length > 0 &&
        !formErrors[inputProps.name].isValid && (
          <p className="text-red-500 text-sm">
            {formErrors[inputProps.name].messages[0]}
          </p>
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
    setValues({ [inputProps.name]: e.target?.value });
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

interface SelectProps extends InputPropsTypes<any> {
  options: Array<{
    title: string;
    value: string;
  }>;
}

export const SelectInputComponent: React.FC<SelectProps> = ({
  label,
  setValues,
  values,
  mode = "primary",
  width = "w-full",
  ...inputProps
}) => {
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues: ObjectProps) => ({
      ...prevValues,
      [inputProps.name]: e.target?.value,
    }));
  };
  return (
    <div className="flex flex-col ">
      {label && (
        <label className="text-black font-semibold text-base">{label}</label>
      )}
      <div className="relative">
        <input
          onChange={onChange}
          name={inputProps.name}
          type={inputProps.type}
          placeholder={inputProps.placeholder}
          value={values[inputProps.name]}
          className={`p-2 rounded-t-md ${width} outline-none border border-1 ${inputMode[mode]} focus:border-[0.09rem] ${inputProps.className} `}
        />
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="absolute right-2 cursor-pointer top-1/2 transform -translate-y-1/2"
        >
          <Icon icon="bitcoin-icons:caret-up-outline" />
        </span>
      </div>
      {openOptions && (
        <div className="bg-primary-dark rounded-b-md h-36 overflow-y-scroll sidebar-scroll   flex flex-col gap-3  text-white">
          {inputProps.options.map((option) => (
            <div
              onClick={() =>
                setValues((prevValues: ObjectProps) => ({
                  ...prevValues,
                  [inputProps.name]: option.value,
                }))
              }
              className="border-b-[0.01px] p-2 cursor-pointer border-b-white"
            >
              {option.title}
            </div>
          ))}
        </div>
      )}
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
