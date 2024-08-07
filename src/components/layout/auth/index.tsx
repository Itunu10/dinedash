import { Outlet } from "react-router";
import AuthHeader from "./header";

const AuthLayout = () => {
  return (
    <div className="">
      <AuthHeader />
      <form className="md:max-w-[42%] max-w-[90%] bg-white mx-auto mt-10 mb-3 md:max-h-[80vh]  overflow-y-scroll noscrollbar p-6 shadow-md">
        <Outlet />
      </form>
    </div>
  );
};

export default AuthLayout;
