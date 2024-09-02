import { useState } from "react";
import { TextInputComponent } from "../../components/tags/input";
import ButtonComponent from "../../components/tags/button";
import { NavLink, useNavigate } from "react-router-dom";
import { useVerifyemailMutation } from "../../features/auth";
import { ObjectProps } from "../../types";
import { useCustomToast } from "../../utils/toast";
import { errorHandler } from "../../utils";

const EmailVerificationPage = () => {
  const [values, setValues] = useState<ObjectProps>({});

  const [verifyemail, { isLoading }] = useVerifyemailMutation();
  const showToast = useCustomToast();

  const navigate = useNavigate();

  const handleSubmitOTP = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      if (!values.token) {
        showToast({
          description: "Please enter OTP",
          title: "Validation Error",
          status: "error",
        });
      }
      const response = await verifyemail(values);
      if (response.error) {
        throw response.error;
      }
      showToast({
        description: "Email verification successful",
        title: "Success",
        status: "success",
      });
      navigate("/dashboard");
    } catch (error) {
      const description = errorHandler(error);
      showToast({
        description,
        title: "Error",
        status: "error",
      });
    }
  };

  return (
    <div>
      <div className="text-center space-y-1">
        <h1 className="font-semibold text-xl tracking-wider">Verify Email</h1>
        <p className=" font-light text-gray-500 ">
          Check your email and enter the OTP send to your email address
        </p>
      </div>
      <div className="flex flex-col gap-4 my-5">
        <TextInputComponent
          mode="light"
          name="token"
          label="Enter OTP"
          placeholder="Enter OTP"
          values={values}
          setValues={setValues}
        />
      </div>
      <div className="flex flex-col">
        <ButtonComponent
          isLoading={isLoading}
          onClick={handleSubmitOTP}
          width="w-36"
          className="self-end"
        >
          Continue
        </ButtonComponent>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">
          <NavLink className={"text-primary-default"} to="">
            Resend Email
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
