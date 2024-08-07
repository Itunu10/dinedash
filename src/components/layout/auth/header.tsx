import { Icon } from "@iconify/react/dist/iconify.js";
import LogoComponent from "../../logo";
import { useNavigate } from "react-router";

const AuthHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="flex p-5 items-center bg-white shadow-md justify-between">
      <LogoComponent />

      <div
        onClick={() => navigate(-1)}
        role="button"
        className="flex items-center gap-2"
      >
        <span className="text-primary-default bg-primary-light flex items-center justify-center  w-5 h-5 rounded-md">
          <Icon icon="weui:back-filled" />
        </span>
        <span>Back</span>
      </div>
    </header>
  );
};

export default AuthHeader;
