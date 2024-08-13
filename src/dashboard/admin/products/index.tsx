import { useState } from "react";
import DashboardHeaderText from "../../../components/header/dashboard";
import ButtonComponent from "../../../components/tags/button";
import { TextInputComponent } from "../../../components/tags/input";

const AdminProductsPage = () => {
  const categories = new Array(8).fill(0);
  const [values, setValues] = useState({});
  return (
    <div>
      <div className="mb-5">
        <DashboardHeaderText
          title="Products Categories"
          description="View all products categories"
        />
        <div className="flex nd:gap-8 gap-4 md:justify-end justify-between">
          <TextInputComponent
            values={values}
            setValues={setValues}
            name="category"
            placeholder="Enter Category name"
            width={"md:w-72"}
          />
          <ButtonComponent width="md:w-40 ">Add Category</ButtonComponent>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-2 gap-5 my-4">
          {categories.map((category, index) => {
            return (
              <div
                key={category}
                className="flex justify-between text-sm gap-4 rounded-md items-center p-3 bg-gray-200"
              >
                <span>Category</span>
                <span>{index + 1}</span>
              </div>
            );
          })}
        </div>
      </div>{" "}
      <div className="mb-5">
        <DashboardHeaderText title="Products" description="View all products" />
      </div>{" "}
    </div>
  );
};

export default AdminProductsPage;
