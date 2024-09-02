import { useEffect, useState } from "react";
import DashboardHeaderText from "../../../components/header/dashboard";
import { TextInputComponent } from "../../../components/tags/input";
import { passwordData, profileData } from "../../../data/profile-data";
import ButtonComponent from "../../../components/tags/button";
import {
  useGetprofileQuery,
  useUpdatepasswordMutation,
  useUpdateprofileMutation,
} from "../../../features/auth";
import { useCustomToast } from "../../../utils/toast";
import { errorHandler } from "../../../utils";
import { ObjectProps } from "../../../types";

const ProfilePage = () => {
  const [values, setValues] = useState<ObjectProps>({});
  const [password, setPassword] = useState<ObjectProps>({});

  const { data: profile } = useGetprofileQuery();

  const [updateprofile, { isLoading: isProfileLoading }] =
    useUpdateprofileMutation();

  const [updatepassword, { isLoading: isPasswordLoading }] =
    useUpdatepasswordMutation();
  console.log(profile);

  useEffect(() => {
    if (profile?.data) {
      setValues({
        firstName: profile?.data?.firstName,
        lastName: profile?.data?.lastName,
        email: profile?.data?.createdBy?.email,
        phone: profile?.data?.createdBy?.phone,
      });
      console.log(profile?.data);
    }
  }, [profile]);

  const showToast = useCustomToast();

  const handleUpdateProfile = async () => {
    try {
      const response = await updateprofile(values);
      if (response.error) {
        return response.error;
      }
      showToast({
        title: "Success",
        description: "Profile updated successfully",
        status: "success",
      });
    } catch (error) {
      const description = errorHandler(error);
      showToast({
        title: "Error",
        description: description,
        status: "error",
      });
    }
  };

  const handleUpdatePassword = async () => {
    try {
      if (!password.oldPassword || !password.newPassword) {
        showToast({
          title: "Error",
          description: "Please fill all fields",
          status: "error",
        });
        return;
      }
      const response = await updatepassword(password);
      if (response.error) {
        return response.error;
      }
      showToast({
        title: "Success",
        description: "Password changed successfully",
        status: "success",
      });
    } catch (error) {
      const description = errorHandler(error);
      showToast({
        title: "Error",
        description: description,
        status: "error",
      });
    }
  };

  console.log(values);

  return (
    <div>
      <DashboardHeaderText
        title="Profile"
        description="You can view and edit your profile details"
      />
      <div className="p-4">
        <div className="my-5 flex-col gap-3 ">
          <h1 className="text-base font-semibold">Profile Details</h1>
          <div className="grid md:grid-cols-2 gap-6 my-5">
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
                  showValidate={false}
                  type={data.type}
                />
              );
            })}
          </div>
          <ButtonComponent
            isLoading={isProfileLoading}
            mode="light"
            width="w-44"
            onClick={handleUpdateProfile}
          >
            Update Profile
          </ButtonComponent>
        </div>
        <div className="my-5 flex-col gap-3">
          <h1 className="text-base font-semibold">Password </h1>
          <div className="grid grid-cols-1 w-[40%] my-5 gap-6">
            {passwordData.map((data) => {
              return (
                <TextInputComponent
                  mode="light"
                  name={data.name}
                  label={data.label}
                  placeholder={data.placeholder}
                  values={password}
                  setValues={setPassword}
                  showValidate={false}
                  type={"password"}
                />
              );
            })}
            <ButtonComponent
              isLoading={isPasswordLoading}
              onClick={handleUpdatePassword}
              mode="light"
              width="w-44"
            >
              Update Password
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
