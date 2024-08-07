import { useState } from "react";
import DashboardHeaderText from "../../../components/header/dashboard";
import { TextInputComponent } from "../../../components/tags/input";
import { passwordData, profileData } from "../../../data/profile-data";
import ButtonComponent from "../../../components/tags/button";

const ProfilePage = () => {
  const [values, setValues] = useState({});

  return (
    <div>
      <DashboardHeaderText
        title="Profile"
        description="You can view and edit your profile details"
      />
      <div className="p-4">
        <div className="my-5 flex-col gap-3 ">
          <h1 className="text-base font-semibold">Profile Details</h1>
          <form className="grid md:grid-cols-2 gap-6 my-5">
            {profileData.map((data) => {
              return (
                <TextInputComponent
                  mode="light"
                  name={data.name}
                  label={data.label}
                  placeholder={data.placeholder}
                  values={values}
                  setValues={setValues}
                  value={data.value}
                />
              );
            })}
          </form>
          <ButtonComponent mode="light" width="w-44">
            Update Profile
          </ButtonComponent>
        </div>
        <div className="my-5 flex-col gap-3">
          <h1 className="text-base font-semibold">Password </h1>
          <form className="grid grid-cols-1 w-[40%] my-5 gap-6">
            {passwordData.map((data) => {
              return (
                <TextInputComponent
                  mode="light"
                  name={data.name}
                  label={data.label}
                  placeholder={data.placeholder}
                  values={values}
                  setValues={setValues}
                />
              );
            })}
            <ButtonComponent mode="light" width="w-44">
              Update Password
            </ButtonComponent>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
