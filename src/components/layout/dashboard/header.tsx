import { Icon } from "@iconify/react/dist/iconify.js";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router";

const DashboardHeader: React.FC<{
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}> = ({ setIsOpen, isOpen }) => {
  const navigate = useNavigate();
  return (
    <header className="bg-white  p-5 shadow-md">
      <nav className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">
          Welcome <span className="text-primary-default">Ralph</span>
        </h1>
        <ul className="flex text-xl items-center gap-5">
          <li onClick={() => navigate("/dashboard/cart")}>
            <span role="button">
              <Icon icon="mdi:cart-outline" />
            </span>
          </li>
          <li onClick={() => navigate("/dashboard/profile")} role="button">
            <span>
              <Icon icon="iconoir:profile-circle" />
            </span>
          </li>
          <li
            onClick={() => navigate("/dashboard/notifications")}
            role="button"
          >
            <span>
              <Icon icon="hugeicons:notification-01" />
            </span>
          </li>
          <li
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            role="button"
          >
            <span>
              <Icon icon="lets-icons:menu" />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DashboardHeader;
