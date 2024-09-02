import { useState } from "react";
import { useApp, useModal } from "../../hooks";
import ButtonComponent from "../tags/button";
import { TextAreaComponent, TextInputComponent } from "../tags/input";
import { useCustomToast } from "../../utils/toast";
import { ObjectProps } from "../../types";
import { ModalComponent } from "../modal";
import UploadFileComponent from "../uplaod";
import { useCreatefileMutation } from "../../features/file";
import { useCreatecategoryMutation } from "../../features/category";
import { errorHandler } from "../../utils";

const AddCategoryModalComponent = () => {
  const { modal, setModal } = useModal();
  const [values, setValues] = useState<ObjectProps>({});

  const [createfile, { isLoading: isLoadingCreatefile }] =
    useCreatefileMutation();

  const [createcategory, { isLoading }] = useCreatecategoryMutation();

  const {
    app: { file },
  } = useApp();

  const showToast = useCustomToast();

  const uploadFile = async () => {
    try {
      const formData = new FormData();
      file && formData.append("image", file);
      const response = await createfile(formData);

      // setId(response?.data?.data?.files[0].id);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const onClose = () => {
    setModal({ ...modal, isOpenAddCategory: !modal.isOpenAddCategory });
  };

  const handleUploadCategory = async () => {
    if (file === null) {
      return showToast({
        title: "Error",
        description: "Please select a file to upload",
        status: "error",
      });
    }
    if (!values.name || !values.description) {
      return showToast({
        title: "Error",
        description: "Please fill in all required fields",
        status: "error",
      });
    }

    try {
      const fileResponse = await uploadFile();
      console.log(values);
      const response = await createcategory({
        ...values,
        image: fileResponse?.data?.data?.filesId?.files[0],
      });

      if (response.error) {
        throw response.error;
      }
      showToast({
        title: "Success",
        description: "Category added successfully",
        status: "success",
      });
      setValues({
        name: "",
        description: "",
      });

      onClose();

      console.log(values);
    } catch (error) {
      const description = errorHandler(error);
      showToast({
        title: "Error",
        description: description,
        status: "error",
      });
      console.log(error);
    }
  };

  return (
    <ModalComponent
      title="Category"
      subTitle="Add category of product for your restaurant application"
      maxWidth="35%"
      onClose={onClose}
      isOpen={modal.isOpenAddCategory}
    >
      <div className="flex flex-col gap-3 my-2">
        <TextInputComponent
          values={values}
          setValues={setValues}
          name="name"
          label="Name "
          mode="light"
        />
        <UploadFileComponent />
        <TextAreaComponent
          values={values}
          setValues={setValues}
          name="description"
          placeholder="Write a short description for this category"
        />
        <div className="flex items-center gap-4 my-3">
          <ButtonComponent onClick={onClose} mode="light">
            Close
          </ButtonComponent>
          <ButtonComponent
            isLoading={isLoading || isLoadingCreatefile}
            onClick={handleUploadCategory}
          >
            Update
          </ButtonComponent>
        </div>
      </div>
    </ModalComponent>
  );
};

export default AddCategoryModalComponent;
