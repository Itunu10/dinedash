import { useDispatch } from "react-redux";
import { useApp, useModal } from "../../hooks";
import { ObjectProps } from "../../types";
import { errorHandler } from "../../utils";
import { ModalComponent } from "../modal";
import { useCreateorderMutation } from "../../features/order";
import { cartApi } from "../../features/cart";
import { useCustomToast } from "../../utils/toast";
import ButtonComponent from "../tags/button";
import UploadFileComponent from "../uplaod";
import { useCreatefileMutation } from "../../features/file";

const MakePaymentModalComponent: React.FC<{
  data: ObjectProps;
  total: number;
}> = ({ data, total }) => {
  const { modal, setModal } = useModal();
  const showToast = useCustomToast();

  const onClose = () => {
    setModal({ ...modal, isOpenMakeOrder: false });
  };

  const dispatch = useDispatch();
  const [createfile, { isLoading: isLoadingCreatefile }] =
    useCreatefileMutation();

  const [createorder, { isLoading: createorderLoading }] =
    useCreateorderMutation();

  const {
    app: { file },
  } = useApp();

  console.log(file);

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

  const handleCreateOrder = async () => {
    try {
      const fileResponse = await uploadFile();

      const response = await createorder({
        items: data?.data?.docs?.map((item: ObjectProps) => ({
          item: item?.menuId?._id,
          quantity: item?.quantity,
          cartId: item?._id,
        })),
        fileId: fileResponse?.data?.data?.filesId?.files[0],

        totalPrice: total,
        address: "my address",
        // menuId: data?._id,
        // quantity: +quantity,
      });
      if (response.error) {
        throw response.error;
      }
      showToast({
        title: "Success",
        description: "Products orders successfully",
        status: "success",
      });
      dispatch(cartApi.util.invalidateTags(["cart"]));
      onClose();
    } catch (error) {
      const description = errorHandler(error);
      showToast({
        title: "Error",
        description,
        status: "error",
      });
    }
  };

  return (
    <ModalComponent
      onClose={onClose}
      isOpen={modal.isOpenMakeOrder}
      title="Process Payment"
      subTitle="upload proof of payment to complete your order"
    >
      <div className="flex flex-col gap-4">
        <h2>Upload Proof of payment</h2>
        <UploadFileComponent />
        <h1 className="font-semibold">
          Total:
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(total)}
        </h1>
        <div className=" flex justify-end">
          {" "}
          <ButtonComponent
            disabled={file === null}
            width="w-44"
            onClick={handleCreateOrder}
            isLoading={isLoadingCreatefile || createorderLoading}
          >
            Check Out
          </ButtonComponent>
        </div>
      </div>
    </ModalComponent>
  );
};

export default MakePaymentModalComponent;
