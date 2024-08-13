import { NavLink, useLocation } from "react-router-dom";
import { sidebarData } from "../../../../data/sidebar-data";
import LogoComponent from "../../../logo";
import { Dispatch, SetStateAction } from "react";

const AdminDashboardSidebar: React.FC<{
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}> = ({ setIsOpen, isOpen }) => {
  const location = useLocation()
    .pathname.split("/")
    .filter((p) => p !== "");

  const path = location[1] === undefined ? "products" : location[1];
  console.log({ location, path });
  return (
    <aside
      className={`h-screen md:w-[16%] w-[50%] md:relative ${
        isOpen ? " left-0" : "md:left-0 -left-[20rem]"
      } fixed md:flex z-50 flex-col  duration-700 transition-all   bg-[#EBF3EB]   `}
    >
      <div className="p-8 ">
        <LogoComponent />
      </div>
      <nav className="flex flex-col gap-4 my-8">
        {sidebarData.admin.map((route) => {
          console.log(route.link);
          return (
            <NavLink
              onClick={() => setIsOpen(false)}
              className={`flex ${
                path === route.link
                  ? "bg-primary-light text-primary-default"
                  : "text-[#6C757D]"
              }  p-2 items-center gap-4 `}
              to={route.link}
            >
              <span className={`text-base `}>{route.icon}</span>
              <span className={``}>{route.name}</span>
            </NavLink>
          );
        })}
      </nav>
      <nav className=" justify-self-end text-center">
        <NavLink className={"text-red-600"} to={"/login"}>
          Logout
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminDashboardSidebar;
