import { useDispatch } from "react-redux";
import { useModal } from "../../hooks";
import { ObjectProps } from "../../types";
import { errorHandler } from "../../utils";
import { ModalComponent } from "../modal";
import { orderApi } from "../../features/order";
import { useCustomToast } from "../../utils/toast";
import ButtonComponent from "../tags/button";
import {
  useApprovetransactionMutation,
  useCanceltransactionMutation,
} from "../../features/transactions";

const ApprovePaymentComponent: React.FC<{
  data: ObjectProps;
}> = ({ data }) => {
  const { modal, setModal } = useModal();
  const showToast = useCustomToast();

  console.log(data);

  const onClose = () => {
    setModal({ ...modal, isOpenApprovePayment: false });
  };

  const dispatch = useDispatch();

  const [canceltransaction, { isLoading: cancelLoading }] =
    useCanceltransactionMutation();
  const [approvetransaction, { isLoading: approveLoading }] =
    useApprovetransactionMutation();

  const handleCancelTransaction = async () => {
    try {
      const response = await canceltransaction(data?._id);
      if (response.error) {
        throw response.error;
      }
      showToast({
        title: "Success",
        description: "Transaction cancelled successfully",
        status: "success",
      });
      dispatch(orderApi.util.invalidateTags(["order"]));
      onClose();
    } catch (err) {
      const description = errorHandler(err);
      showToast({
        title: "Error",
        description,
        status: "error",
      });
    }
  };

  const handleApproveTransaction = async () => {
    try {
      const response = await approvetransaction(data?._id);
      if (response.error) {
        throw response.error;
      }
      showToast({
        title: "Success",
        description: "Transaction approved successfully",
        status: "success",
      });
      dispatch(orderApi.util.invalidateTags(["order"]));
      onClose();
    } catch (err) {
      const description = errorHandler(err);
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
      isOpen={modal.isOpenApprovePayment}
      title="Payment Approval"
      subTitle="approve the proof of payment to process the customer order"
    >
      <div className="flex flex-col gap-4">
        <h2>Expected Price : {data?.amount}</h2>

        <div className="w-full h-64">
          <img
            className="w-full h-full object-cover"
            src={data?.file?.url}
            alt="image"
          />
        </div>

        <div className=" flex justify-end">
          {" "}
          {data?.status === "pending" ? (
            <div className="flex items-center gap-4">
              <ButtonComponent
                width="w-44"
                onClick={handleCancelTransaction}
                isLoading={cancelLoading}
                className="bg-red-500 tex-white"
              >
                Cancel Payment
              </ButtonComponent>
              <ButtonComponent
                width="w-44"
                onClick={handleApproveTransaction}
                isLoading={approveLoading}
              >
                Approve Payment
              </ButtonComponent>
            </div>
          ) : (
            <ButtonComponent width="w-44" onClick={onClose}>
              Close Modal
            </ButtonComponent>
          )}
        </div>
      </div>
    </ModalComponent>
  );
};

export default ApprovePaymentComponent;
