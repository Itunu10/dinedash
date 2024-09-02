import { Outlet, useNavigate } from "react-router";
import AuthHeader from "./header";
import { useAuth } from "../../../hooks";
import { useEffect } from "react";
import { instance } from "../../../api/client";

const AuthLayout = () => {
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const getprofile = async () => {
    const response = await instance.get("/user/profile?_populate=createdBy");
    return response; // No need to use `await` here again since it is already awaited.
  };

  useEffect(() => {
    if (isAuthenticated) {
      const fetchProfile = async () => {
        try {
          const profile = await getprofile();

          if (profile.status === 200) {
            const isAdmin = profile?.data?.data?.createdBy?.type === "super";

            if (isAdmin) {
              navigate("/admin", {
                replace: true,
              });
            } else {
              navigate("/dashboard", {
                replace: true,
              });
            }
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };

      fetchProfile();
    }
  }, [isAuthenticated, navigate]);

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
