import { UseToastOptions, useToast } from "@chakra-ui/react";
import success_icon from "../assets/success_icon_2.png";
import { Icon } from "@iconify/react/dist/iconify.js";

interface CustomToastOptions extends UseToastOptions {
  title: string;
  description: string;
  status?: "success" | "error" | "warning" | "info";
  duration?: number;
  isClosable?: boolean;
}

export const useCustomToast = () => {
  const toast = useToast();

  const showToast = ({
    title,
    description,
    status = "success",
    duration = 3000,
    isClosable = false,
    position = "top-right",
  }: CustomToastOptions) => {
    toast({
      title,
      description,
      status,
      duration,
      isClosable,
      position,
      render: () => (
        <>
          {status === "success" && (
            <div className="bg-white shadow-md flex gap-6  items-center rounded-md px-4 py-3">
              <span>
                <img className="w-16" src={success_icon} />
              </span>
              <div className="flex flex-col gap-2">
                <h1 className="text-base text-gray-800 font-medium">{title}</h1>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </div>
          )}
          {status === "error" && (
            <div className="bg-red-400 text-white shadow-md flex gap-6  items-center rounded-md px-4 py-3">
              <span className="text-white">
                <Icon width={"2rem"} icon="nonicons:error-16" />
              </span>
              <div className="flex text-white flex-col gap-2">
                <h1 className="text-base text-white  font-medium">{title}</h1>
                <p className="text-white text-sm">{description}</p>
              </div>
            </div>
          )}
        </>
      ),
    });
  };

  return showToast;
};
