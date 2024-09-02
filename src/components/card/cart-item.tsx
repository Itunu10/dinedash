import React, { useState } from "react";
import { ObjectProps } from "../../types";
import ButtonComponent from "../tags/button";
import { useProduct } from "../../hooks";
import { usedeletecartMutation } from "../../features/cart";
import { useCustomToast } from "../../utils/toast";
import { errorHandler } from "../../utils";

const CartItemComponent: React.FC<{ data: ObjectProps }> = ({ data }) => {
  //   const { setModal, modal } = useModal();

  const [quantity, setQuantity] = useState(data.quantity || 1);

  console.log(data);

  const { setData } = useProduct();

  const showToast = useCustomToast();

  const [deletecart, { isLoading }] = usedeletecartMutation();

  const handleRemoveItemFromCart = async () => {
    try {
      const response = await deletecart({
        id: data?._id,
      });
      if (response.error) {
        throw response.error;
      }
      showToast({
        title: "Success",
        description: "Item removed from cart successfully",
        status: "success",
      });
    } catch (error) {
      const description = errorHandler(error);
      showToast({
        title: "Error",
        description: description || "Failed to remove item from cart",
        status: "error",
      });
    }
    //   use index to remove
    // setData((prevData) =>
    //   prevData.filter((item: ObjectProps) => item.name !== data.name)
    // );
  };

  return (
    <>
      <div
        onClick={() => setData(data)}
        className="bg-white h-full  p-5 rounded-md shadow-md hover:shadow-xl"
      >
        <img
          src={data?.menuId?.image?.url}
          alt={data?.name}
          className="w-full h-56 bg-primary-light object-cover"
        />
        <h1 className="text-sm font-semibold my-2">{data?.menuId?.name}</h1>
        <p className="text-sm">{data?.menuId?.description}</p>
        <span className="text-sm text-primary-default font-semibold">
          ${data?.menuId?.price}
        </span>
        <div className="flex items-center gap-3 justify-between mt-6">
          <ButtonComponent
            className="flex items-center gap-4  justify-center"
            width="w-36"
            mode="dark"
          >
            <span
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              -
            </span>
            <span className="font-semibold">{quantity}</span>
            <span onClick={() => setQuantity(quantity + 1)}>+</span>
          </ButtonComponent>

          <ButtonComponent
            isLoading={isLoading}
            onClick={handleRemoveItemFromCart}
            mode="light"
            width="w-36"
          >
            Remove
          </ButtonComponent>
        </div>
      </div>
    </>
  );
};

export default CartItemComponent;
