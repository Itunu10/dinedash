import { Navigate, Outlet } from "react-router";
import { useGetprofileQuery } from "../features/auth";
import { useAuth } from "../hooks";
import { AxiosError } from "axios";
import AddCategoryModalComponent from "../components/modals/add-category-modal";
import AddMenuComponent from "../components/modals/add-menu-modal";
import RenameComponentModal from "../components/modals/rename-modal";
import DeleteModalComponent from "../components/modals/delete-modal";

const ProtectedRoute = () => {
  const { isAuthenticated, logout } = useAuth();
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace={true} />;
  }

  const { error, isError, data } = useGetprofileQuery();
  console.log(data);

  const errorType = error as AxiosError;

  if (isError && errorType.status !== undefined) {
    console.log("Logging out");
    logout();
    return <Navigate to={"/login"} replace={true} />;
  }

  return (
    <>
      <AddCategoryModalComponent />
      <RenameComponentModal />
      <DeleteModalComponent />
      <AddMenuComponent />
      <Outlet />;
    </>
  );
};

export default ProtectedRoute;
