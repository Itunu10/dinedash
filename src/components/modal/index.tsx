import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ReactNode } from "react";

interface ModalComponentProps {
  onClose: () => void;
  isOpen: boolean;
  children: ReactNode;
  title?: string;
  subTitle?: string;
  showCloseButton?: boolean;
  maxWidth?: string;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
  onClose,
  isOpen,
  children,
  title,
  subTitle,
  showCloseButton = true,
  maxWidth = "50%",
}) => {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="z-[2000]">
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="0.1rem"
          padding="0.1rem"
          className=" max-h-[95vh]"
          maxWidth={maxWidth}
        >
          <ModalHeader
            className="mt-5"
            display="flex"
            flexDirection="column"
            gap="0.1rem"
          >
            <h1 className="text-gray-800  text-base font-normal ">{title}</h1>
            <h3 className="text-gray-600 font-light text-sm">{subTitle}</h3>
          </ModalHeader>
          {showCloseButton && (
            <ModalCloseButton className="text-slate-500">
              <Icon width={20} icon="zondicons:close-outline" />
            </ModalCloseButton>
          )}
          <ModalBody className="overflow-y-scroll disable-scrollbar">
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
