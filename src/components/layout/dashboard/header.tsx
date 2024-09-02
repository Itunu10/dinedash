import { Icon } from "@iconify/react/dist/iconify.js";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router";
import { useGetcartsQuery } from "../../../features/cart";
import { useGetnotificationsQuery } from "../../../features/notifications";
import { useGetprofileQuery } from "../../../features/auth";

const DashboardHeader: React.FC<{
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}> = ({ setIsOpen, isOpen }) => {
  const navigate = useNavigate();

  const { data: carts } = useGetcartsQuery();
  const { data: notifications } = useGetnotificationsQuery("isRead=false");

  const { data: profile } = useGetprofileQuery();

  return (
    <header className="bg-white  p-5 shadow-md">
      <nav className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">
          Welcome{" "}
          <span className="text-primary-default">
            {profile?.data?.firstName}
          </span>
        </h1>
        <ul className="flex text-xl items-center gap-5">
          <li onClick={() => navigate("cart")}>
            <span role="button" className="relative">
              <Icon icon="mdi:cart-outline" />
              <span className="absolute -top-1 -right-1 w-4 rounded-full p-0.5  h-4  flex flex-col items-center justify-center text-xs text-primary-default bg-primary-light">
                {carts?.data?.totalDocs}
              </span>
            </span>
          </li>
          <li onClick={() => navigate("profile")} role="button">
            <span>
              <Icon icon="iconoir:profile-circle" />
            </span>
          </li>
          <li onClick={() => navigate("notifications")} role="button">
            <span className="relative">
              <Icon icon="hugeicons:notification-01" />
              <span className="absolute -top-1 -right-1 w-4 rounded-full p-0.5  h-4  flex flex-col items-center justify-center text-xs text-primary-default bg-primary-light">
                {notifications?.data?.totalDocs}
              </span>
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
