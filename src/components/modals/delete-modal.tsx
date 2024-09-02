import { useNavigate } from "react-router";
import { useModal } from "../../hooks";
import ButtonComponent from "../tags/button";
import { useSearchParams } from "react-router-dom";

import { errorHandler } from "../../utils";
import { useCustomToast } from "../../utils/toast";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { ModalComponent } from "../modal";
import { usedeletecategoryMutation } from "../../features/category";
import { usedeletemenuMutation } from "../../features/menu";

const DeleteModalComponent = () => {
  const { modal, setModal } = useModal();
  const [searchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);

  //   const dispatch = useDispatch();

  const showToast = useCustomToast();

  const type = searchParams.get("type");
  const id = searchParams.get("id") as string;
  const onClose = () => {
    setModal({ ...modal, isOpenDelete: !modal.isOpenDelete });
    navigate("?");
  };

  const [deletecategory] = usedeletecategoryMutation();
  const [deletemenu] = usedeletemenuMutation();

  const navigate = useNavigate();
  const handleDelete = async () => {
    try {
      setIsLoading(true);

      let response;

      if (type === "menu") {
        response = await deletemenu({ id });
      } else if (type === "category") {
        response = await deletecategory({ id });
      } else {
      }

      if (response?.error) {
        throw response.error;
      }

      showToast({
        status: "success",
        title: "Success",
        description: `You have deleted the ${type} successfully`,
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
      setIsLoading(false);
    }
  };
  return (
    <ModalComponent
      maxWidth="35%"
      showCloseButton={false}
      title={`Delete ${type}`}
      subTitle={`You are about deleting this ${type} from RAMS. would you like to proceed? `}
      onClose={onClose}
      isOpen={modal.isOpenDelete}
    >
      <div className="flex gap-4">
        <ButtonComponent onClick={onClose} mode="light">
          Close
        </ButtonComponent>
        <ButtonComponent
          isLoading={isLoading}
          mode="primary"
          onClick={handleDelete}
        >
          Yes, Proceed
        </ButtonComponent>
      </div>
    </ModalComponent>
  );
};

export default DeleteModalComponent;
