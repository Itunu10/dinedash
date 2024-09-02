import { Dispatch, SetStateAction, useState } from "react";
import { TextInputComponent } from "../../components/tags/input";
import ButtonComponent from "../../components/tags/button";
import { NavLink } from "react-router-dom";
import { useRequestemailverificationMutation } from "../../features/auth";
import { useCustomToast } from "../../utils/toast";
import { errorHandler } from "../../utils";

const RequestResetOTP: React.FC<{
  setStep: Dispatch<SetStateAction<string>>;
}> = ({ setStep }) => {
  const [values, setValues] = useState({});

  const [requestotp, { isLoading }] = useRequestemailverificationMutation();

  const showToast = useCustomToast();

  const handleReqeustOTP = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await requestotp(values);
      if (response.error) {
        throw response.error;
      }
      showToast({
        status: "success",
        title: "Success",
        description:
          "We've sent you a verification email. Please check your inbox.",
      });

      setStep("reset");
    } catch (error) {
      const description = errorHandler(error);
      showToast({
        title: "Error",
        description,
        status: "error",
        duration: 3000,
      });
    }
  };

  return (
    <div>
      <div className="text-center space-y-1">
        <h1 className="font-semibold text-xl tracking-wider">Request OTP</h1>
        <p className=" font-light text-gray-500 ">
          Enter the email address you used to register
        </p>
      </div>
      <div className="flex flex-col gap-4 my-5">
        <TextInputComponent
          mode="light"
          name="email"
          label="Enter email address"
          placeholder="Enter email address"
          values={values}
          setValues={setValues}
          showValidate={false}
        />
      </div>
      <div className="flex flex-col">
        <ButtonComponent
          onClick={handleReqeustOTP}
          width="w-36"
          className="self-end"
          isLoading={isLoading}
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

export default RequestResetOTP;
