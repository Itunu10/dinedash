import { useState } from "react";
import { TextInputComponent } from "../../components/tags/input";
import { loginData } from "../../data/login-data";
import ButtonComponent from "../../components/tags/button";
import { NavLink, useNavigate } from "react-router-dom";
import { useCustomToast } from "../../utils/toast";
import { useAuth } from "../../hooks";
import { LoginRequest, ObjectProps } from "../../types";
import { errorHandler } from "../../utils";

const Loginpage = () => {
  const [values, setValues] = useState<ObjectProps>({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();

  const showToast = useCustomToast();

  const navigate = useNavigate();
  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (!values.email || !values.password) {
        showToast({
          status: "error",
          description: "Please fill  all input fields",
          title: "Validation Error",
        });

        return;
      }

      setIsLoading(true);

      const request = values as LoginRequest;

      const response = await login(request);

      console.log(response);

      showToast({
        status: "success",
        description: "Login successful",
        title: "Login",
      });

      if (response.user.type === "individual") {
        return navigate("/dashboard");
      }
      if (response.user.type === "super") {
        return navigate("/admin");
      }
      // navigate("/dashboard");
    } catch (error) {
      const description = errorHandler(error);
      showToast({
        status: "error",
        description: description,
        title: "Error",
      });
    } finally {
      setIsLoading(false);
    }
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
              showValidate={false}
              type={data.type}
            />
          );
        })}
      </ul>
      <div className="flex flex-col">
        <ButtonComponent
          isLoading={isLoading}
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
