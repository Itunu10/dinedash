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

export const CartModalComponent: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { data } = useProduct();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onClose();
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
          className="bg-white  "
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="0.1rem"
          padding="0.1rem"
          maxWidth={"35%"}
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
                src={data.image}
                alt={data.name}
                className="w-full h-56 bg-primary-light object-cover"
              />
              <h1 className="text-sm font-semibold my-2">{data.name}</h1>
              <p className="text-sm">{data.description}</p>
              <span className="text-sm text-primary-default font-semibold">
                ${data.price}
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
