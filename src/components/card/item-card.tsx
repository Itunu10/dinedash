import React from "react";
import { ObjectProps } from "../../types";
import ButtonComponent from "../tags/button";
import { useModal, useProduct } from "../../hooks";

const ItemCardComponent: React.FC<{ data: ObjectProps }> = ({ data }) => {
  const { setModal, modal } = useModal();

  const { setData } = useProduct();

  console.log(data);

  return (
    <>
      <div
        onClick={() => setData(data)}
        className="bg-white h-full  p-5 rounded-md shadow-md hover:shadow-xl"
      >
        <img
          src={data?.image?.url}
          alt={data?.name}
          className="w-full h-56 bg-primary-light object-cover"
        />
        <h1 className="text-sm font-semibold my-2">{data?.name}</h1>
        <p className="text-sm">{data?.description}</p>
        <span className="text-sm text-primary-default font-semibold">
          ${data?.price}
        </span>
        <div className="flex items-center gap-3 justify-between mt-6">
          <div></div>
          {/* <ButtonComponent width="w-32">Order now</ButtonComponent> */}
          <ButtonComponent
            onClick={() => setModal({ ...modal, isOpenCard: true })}
            mode="light"
            width="w-32"
          >
            Add to cart
          </ButtonComponent>
        </div>
      </div>
    </>
  );
};

export default ItemCardComponent;
