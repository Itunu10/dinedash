import { useState } from "react";
import RequestResetOTP from "./request-reset-otp";
import ResetPassword from "./reset-password";

const PasswordResetMangement = () => {
  const [step, setStep] = useState("request-otp");
  return (
    <div>
      {step === "request-otp" && <RequestResetOTP setStep={setStep} />}

      {step === "reset" && <ResetPassword />}
    </div>
  );
};

export default PasswordResetMangement;
