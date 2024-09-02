// create a chakra modal component

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ButtonComponent from "../tags/button";
import { useProduct } from "../../hooks";
import { useState } from "react";
import { errorHandler } from "../../utils";
import { useCustomToast } from "../../utils/toast";
import { useCreatecartMutation } from "../../features/cart";
import { useNavigate } from "react-router";

export const CartModalComponent: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { data } = useProduct();
  const [quantity, setQuantity] = useState(1);

  const [createcart, { isLoading }] = useCreatecartMutation();

  const showToast = useCustomToast();

  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      const response = await createcart({
        menuId: data?._id,
        quantity: +quantity,
      });
      if (response.error) {
        throw response.error;
      }
      showToast({
        title: "Success",
        description: "Item added to cart",
        status: "success",
      });

      onClose();
      navigate("/dashboard/cart");
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
    <div>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          className="bg-white w-[35%]  "
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="0.1rem"
          padding="0.1rem"
        >
          <ModalHeader display="flex" flexDirection="column" gap="0.4rem">
            <h1 className=" text-slate-800 font-semibold">Add to cart</h1>
          </ModalHeader>

          <ModalCloseButton>
            <Icon width={20} icon="zondicons:close-outline" />
          </ModalCloseButton>

          <ModalBody>
            <div>
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
            </div>
          </ModalBody>
          <ModalFooter className="flex gap-5">
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
              onClick={handleAddToCart}
              width="w-36"
              mode="light"
            >
              Add To Cart
            </ButtonComponent>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
