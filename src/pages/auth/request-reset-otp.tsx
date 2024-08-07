import { Dispatch, SetStateAction, useState } from "react";
import { TextInputComponent } from "../../components/tags/input";
import ButtonComponent from "../../components/tags/button";
import { NavLink } from "react-router-dom";

const RequestResetOTP: React.FC<{
  setStep: Dispatch<SetStateAction<string>>;
}> = ({ setStep }) => {
  const [values, setValues] = useState({});

  const handleReqeustOTP = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStep("reset");
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
        />
      </div>
      <div className="flex flex-col">
        <ButtonComponent
          onClick={handleReqeustOTP}
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

export default RequestResetOTP;
