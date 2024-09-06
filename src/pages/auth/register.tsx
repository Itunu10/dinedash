import { useState } from "react";
import { TextInputComponent } from "../../components/tags/input";
import { registerData } from "../../data/login-data";
import ButtonComponent from "../../components/tags/button";
import { NavLink, useNavigate } from "react-router-dom";
import { useApp } from "../../hooks";
import { useCustomToast } from "../../utils/toast";
import { useRegisterMutation } from "../../features/auth";
import { errorHandler } from "../../utils";

const Registerpage = () => {
  const [values, setValues] = useState({});

  const {
    app: { error },
  } = useApp();

  const [register, { isLoading }] = useRegisterMutation();

  const showToast = useCustomToast();

  console.log(error);

  const navigate = useNavigate();
  const hanldleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      console.log(error);
      if (error !== undefined) {
        const err = Object.values(error)[0];
        showToast({
          status: "error",
          description: err,
          title: "Validation Error",
        });

        return;
      }
      const response = await register(values);
      if (response.error) {
        throw response.error;
      }
      showToast({
        status: "success",
        description:
          "Registration successful, please check your email for verification code",
        title: "Registration Successful",
      });
      navigate("/verify-email");
    } catch (error) {
      const description = errorHandler(error);
      showToast({
        status: "error",
        description: description,
        title: "Error",
      });
    }
    console.log("register");
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
              type={data.type}
            />
          );
        })}
      </ul>
      <div className="flex flex-col">
        <ButtonComponent
          isLoading={isLoading}
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
