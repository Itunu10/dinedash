import { useState } from "react";
import { TextInputComponent } from "../../components/tags/input";
import { registerData } from "../../data/login-data";
import ButtonComponent from "../../components/tags/button";
import { NavLink, useNavigate } from "react-router-dom";

const Registerpage = () => {
  const [values, setValues] = useState({});
  const navigate = useNavigate();
  const hanldleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/verify-email");
  };
  return (
    <div>
      <div className="text-center space-y-1">
        <h1 className="font-semibold text-xl tracking-wider">Register</h1>
        <p className=" font-light text-gray-500 ">
          Create an account to enjoy a personalized dining experience
        </p>
      </div>
      <ul className="flex flex-col gap-4 my-5">
        {registerData.map((data) => {
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
          onClick={hanldleRegister}
          width="w-36"
          className="self-end"
        >
          Sign up
        </ButtonComponent>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">
          have an account?{" "}
          <NavLink className="text-primary-default" to="/login">
            login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Registerpage;
