import { useState } from "react";
import { TextInputComponent } from "../../components/tags/input";
import { loginData } from "../../data/login-data";
import ButtonComponent from "../../components/tags/button";
import { NavLink, useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [values, setValues] = useState({});

  const navigate = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="text-center space-y-1">
        <h1 className="font-semibold text-xl tracking-wider">Login</h1>
        <p className=" font-light text-gray-500 ">
          Log in to access your account and start ordering your favorite dishes.
        </p>
      </div>
      <ul className="flex flex-col gap-4 my-5">
        {loginData.map((data) => {
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
          onClick={handleLogin}
          width="w-36"
          className="self-end"
        >
          Sign in
        </ButtonComponent>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">
          Don't have an account?{" "}
          <NavLink className="text-primary-default" to="/register">
            Sign up
          </NavLink>
        </p>
        <p className="text-sm font-medium text-gray-500">
          Forgot your password?{" "}
          <NavLink className={"text-primary-default"} to="/password">
            Reset
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
