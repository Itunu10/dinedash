import { Outlet } from "react-router";
import DashboardHeader from "../header";
import { CartModalComponent } from "../../../modal/cart.modal";
import { useModal } from "../../../../hooks";
import { useState } from "react";
import AdminDashboardSidebar from "./sidebar";
// import { useGetprofileQuery } from "../../../../features/auth";

const AdminDashboardLayout = () => {
  const { modal, setModal } = useModal();

  const [isOpen, setIsOpen] = useState(false);

  // const navigate = useNavigate();

  // const { logout } = useAuth();

  // const { data } = useGetprofileQuery();
  // console.log(data);

  // useEffect(() => {
  //   if (data?.data) {
  //     if (data?.data?.createdBy?.type !== "super") {
  //       logout();
  //       navigate("/login");
  //     }
  //   }
  // }, [data]);

  const onClose = () => {
    setModal({ ...modal, isOpenCard: !modal.isOpenCard });
  };

  return (
    <>
      <CartModalComponent isOpen={modal.isOpenCard} onClose={onClose} />
      <div className="flex w-full h-screen overflow-hidden">
        <AdminDashboardSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex-1 relative overflow-y-scroll noscrollbar">
          <div className="absolute w-full z-10">
            <DashboardHeader isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>

          <main className="p-4 w-full mt-16 overflow-y-scroll h-full  flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardLayout;
