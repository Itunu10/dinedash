import { useState } from "react";
import { TextInputComponent } from "../../components/tags/input";
import ButtonComponent from "../../components/tags/button";
import { useNavigate } from "react-router-dom";
import { passwordResetData } from "../../data/login-data";

const ResetPassword: React.FC = () => {
  const [values, setValues] = useState({});

  const navigate = useNavigate();

  const handleResetPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div>
      <div className="text-center space-y-1">
        <h1 className="font-semibold text-xl tracking-wider">Password Reset</h1>
        <p className=" font-light text-gray-500 ">Reset Your Password</p>
      </div>
      <ul className="flex flex-col gap-4 my-5">
        {passwordResetData.map((data) => {
          return (
            <TextInputComponent
              mode="light"
              name={data.name}
              label={data.label}
              placeholder={data.placeholder}
              values={values}
              setValues={setValues}
            />
          );
        })}
      </ul>
      <div className="flex flex-col">
        <ButtonComponent
          onClick={handleResetPassword}
          width="w-36"
          className="self-end"
        >
          Reset
        </ButtonComponent>
      </div>
      <div></div>
    </div>
  );
};

export default ResetPassword;
