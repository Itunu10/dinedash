import { useEffect, useState } from "react";
import { useModal } from "../../hooks";
import ButtonComponent from "../tags/button";
import { TextAreaComponent, TextInputComponent } from "../tags/input";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCustomToast } from "../../utils/toast";
import { ObjectProps } from "../../types";
import { errorHandler } from "../../utils";
import { ModalComponent } from "../modal";
import {
  useGetcategoryQuery,
  useUpdatecategoryMutation,
} from "../../features/category";
import { useGetmenuQuery, useUpdatemenuMutation } from "../../features/menu";

const RenameComponentModal = () => {
  const { modal, setModal } = useModal();
  const [values, setValues] = useState<ObjectProps>({});

  const [data, setData] = useState<ObjectProps>({});

  const [searchParams] = useSearchParams();

  const id = searchParams.get("id") as string;

  const type = searchParams.get("type");

  const { data: category } = useGetcategoryQuery(id, {
    skip: type !== "category",
  });

  const { data: menu } = useGetmenuQuery(id, {
    skip: type !== "menu",
  });

  useEffect(() => {
    if (category?.data || menu?.data) {
      setData(category?.data || menu?.data);
    }
  }, [category, menu]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(data);

    type === "category" && setValues({ name: data?.name });
    type === "menu" &&
      setValues({ name: data?.name, description: data?.description });
  }, [data]);

  const [updatecategory, { isLoading: isLoadingCategory }] =
    useUpdatecategoryMutation();
  const [updatemenu, { isLoading: isLoadingMenu }] = useUpdatemenuMutation();

  const showToast = useCustomToast();

  const onClose = () => {
    setModal({ ...modal, isOpenRename: !modal.isOpenRename });
    navigate("?");
  };

  const handleRename = async () => {
    try {
      let response;

      if (type === "menu") {
        response = await updatemenu({ id, values });
      } else if (type === "category") {
        response = await updatecategory({ id, values });
      } else {
      }

      if (response?.error) {
        throw response.error;
      }

      showToast({
        status: "success",
        title: "Success",
        description: `You have renamed the item successfully`,
        duration: 3000,
      });
      //   dispatch(archiveApi.util.invalidateTags(["archive"]));

      onClose();
    } catch (error) {
      const description = errorHandler(error);
      showToast({
        status: "error",
        title: "Error",
        description,
        duration: 3000,
      });
    } finally {
    }
  };

  return (
    <ModalComponent
      title={`Rename ${type}`}
      subTitle="Enter the  name for ease of use"
      maxWidth="35%"
      onClose={onClose}
      isOpen={modal.isOpenRename}
    >
      <div className="flex flex-col gap-3 my-2">
        <TextInputComponent
          values={values}
          setValues={setValues}
          name="name"
          label={`${type} name`}
          mode="light"
        />

        {type === "menu" && (
          <TextAreaComponent
            values={values}
            setValues={setValues}
            name="description"
            label={`${type} description`}
            rows={2}
          />
        )}

        <div className="flex items-center gap-4 my-3">
          <ButtonComponent onClick={onClose} mode="light">
            Close
          </ButtonComponent>
          <ButtonComponent
            isLoading={isLoadingCategory || isLoadingMenu}
            onClick={handleRename}
          >
            Update
          </ButtonComponent>
        </div>
      </div>
    </ModalComponent>
  );
};

export default RenameComponentModal;
