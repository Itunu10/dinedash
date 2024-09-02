import { useEffect, useState } from "react";
import { useApp, useModal } from "../../hooks";
import ButtonComponent from "../tags/button";
import {
  SelectMenuComponent,
  TextAreaComponent,
  TextInputComponent,
} from "../tags/input";
import { useCustomToast } from "../../utils/toast";
import { ObjectProps } from "../../types";
import { ModalComponent } from "../modal";
import UploadFileComponent from "../uplaod";
import { errorHandler } from "../../utils";
import { useCreatemenuMutation } from "../../features/menu";
import { useCreatefileMutation } from "../../features/file";
import { useGetcategoriesQuery } from "../../features/category";

const AddMenuComponent = () => {
  const { modal, setModal } = useModal();
  const [values, setValues] = useState<ObjectProps>({});
  const [categories, setCategories] = useState([]);

  const [createfile, { isLoading: isLoadingCreatefile }] =
    useCreatefileMutation();

  const [createmenu, { isLoading }] = useCreatemenuMutation();
  const { data: categoriesData } = useGetcategoriesQuery();
  console.log(categoriesData);

  useEffect(() => {
    if (categoriesData?.data) {
      const mapped = categoriesData?.data?.docs?.map((data: ObjectProps) => {
        return {
          value: data?._id,
          label: data?.name,
        };
      });
      setCategories(mapped);
    }
  }, [categoriesData]);

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
    setModal({ ...modal, isOpenAddMenu: !modal.isOpenAddMenu });
  };

  const handleUploadCategory = async () => {
    if (file === null) {
      return showToast({
        title: "Error",
        description: "Please select a file to upload",
        status: "error",
      });
    }
    if (
      !values.name ||
      !values.description ||
      !values.ingredients ||
      !values.price
    ) {
      return showToast({
        title: "Error",
        description: "Please fill in all required fields",
        status: "error",
      });
    }

    try {
      const fileResponse = await uploadFile();
      const ingredients = values.ingredients.split(",");
      console.log(values);
      const response = await createmenu({
        ...values,
        image: fileResponse?.data?.data?.filesId?.files[0],
        ingredients,
        price: +values.price,
      });

      if (response.error) {
        throw response.error;
      }
      showToast({
        title: "Success",
        description: "Menu added successfully",
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
      title="Add Menu"
      subTitle="You can upload your menu here"
      maxWidth="35%"
      onClose={onClose}
      isOpen={modal.isOpenAddMenu}
    >
      <div className="flex flex-col gap-2 my-1">
        <SelectMenuComponent
          values={values}
          setValues={setValues}
          label="Category"
          initialValue="Category"
          name="category"
          menus={categories}
        />
        <div className="flex items-center gap-3">
          <TextInputComponent
            values={values}
            setValues={setValues}
            name="name"
            label="Name "
            mode="light"
            placeholder="name"
          />
          <TextInputComponent
            values={values}
            setValues={setValues}
            name="price"
            label="Price"
            mode="light"
            type="number"
            placeholder="price"
          />
        </div>
        <TextInputComponent
          values={values}
          setValues={setValues}
          name="ingredients"
          label="Ingredient"
          mode="light"
          placeholder="seperate ingredients by comma"
        />

        <UploadFileComponent />
        <TextAreaComponent
          label="Description"
          values={values}
          setValues={setValues}
          name="description"
          rows={2}
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

export default AddMenuComponent;
