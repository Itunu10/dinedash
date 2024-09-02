// import { Icon } from "@iconify/react/dist/iconify.js";
import DashboardHeaderText from "../../../components/header/dashboard";
// import ButtonComponent from "../../../components/tags/button";
import { EmptySectionComponent } from "../../../components/placeholder/empty";

const AdminAllStaffPage = () => {
  // const staffs = new Array(5).fill(0);
  return (
    <div>
      <DashboardHeaderText
        title="Staffs"
        description="View list of all staffs"
      />

      <EmptySectionComponent title="staffs" />

      {/* <div className="flex justify-end mb-4">
        <ButtonComponent width="w-40">Add Staff</ButtonComponent>
      </div>
      <section className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4">
        {staffs.map((_) => {
          return (
            <div className="flex flex-col gap-1 md:p-4 p-2  border bg-white shadow-md rounded-md">
              <div className="flex items-center  border-b pb-5 justify-between">
                <span className="text-2xl">
                  <Icon icon="mingcute:user-4-line" />
                </span>
                <span>
                  <Icon icon="circum:menu-kebab" />
                </span>
              </div>
              <h1>
                <span>Edward Philip</span>
              </h1>
              <p className="font-light">edward@gmail.com</p>
            </div>
          );
        })}
      </section> */}
    </div>
  );
};

export default AdminAllStaffPage;
