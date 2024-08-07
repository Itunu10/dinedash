import React, { useState } from "react";
import { ObjectProps } from "../../types";
import ButtonComponent from "../tags/button";
import { useModal, useProduct } from "../../hooks";

const CartItemComponent: React.FC<{ data: ObjectProps }> = ({ data }) => {
  //   const { setModal, modal } = useModal();

  const [quantity, setQuantity] = useState(data.quantity || 1);

  const { setData } = useProduct();

  const handleRemoveItemFromCart = () => {
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
          src={data.image}
          alt={data.name}
          className="w-full h-56 bg-primary-light object-cover"
        />
        <h1 className="text-sm font-semibold my-2">{data.name}</h1>
        <p className="text-sm">{data.description}</p>
        <span className="text-sm text-primary-default font-semibold">
          ${data.price}
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
