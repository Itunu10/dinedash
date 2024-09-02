import axios, { AxiosInstance } from "axios";
import ReactDOM from "react-dom/client";
import { useCustomToast } from "../utils/toast";

export const useErrorHandler = () => {
  const showToast = useCustomToast();

  const handleError = (error: any) => {
    let description = "An unexpected error occurred";

    if (error.config.method?.toLocaleUpperCase() !== "GET") {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        description = error.response.data.message;
      } else if (
        error.response &&
        error.response.data &&
        Array.isArray(error.response.data.error)
      ) {
        description = error.response.data.error[0].msg;
      } else {
        description = error.message;
      }
    }

    showToast({
      title: "Error",
      description,
      status: "error",
    });
  };

  return { handleError };
};

// export const useSuccessHandler = () => {
//   const showToast = useCustomToast();

//   const handleSuccess = (response: AxiosResponse) => {
//     if (response.config.method?.toLocaleUpperCase() !== "GET") {
//       showToast({
//         title: "Success",
//         description: response.data.message,
//         status: "success",
//       });
//     }
//   };

//   return { handleSuccess };
// };

export const handleAxiosError = (error: any) => {
  const TempComponent = () => {
    const { handleError } = useErrorHandler();
    handleError(error);
    return null;
  };

  const div = document.createElement("div");
  document.body.appendChild(div);
  const root = ReactDOM.createRoot(div);
  root.render(<TempComponent />);

  setTimeout(() => {
    root.unmount();
    document.body.removeChild(div);
  }, 0);

  return Promise.reject(error);
};

// const handleAxiosSuccess = (response: any) => {
//   const TempComponent = () => {
//     const { handleSuccess } = useSuccessHandler();
//     handleSuccess(response);
//     return null;
//   };

//   const div = document.createElement("div");
//   document.body.appendChild(div);
//   const root = ReactDOM.createRoot(div);
//   root.render(<TempComponent />);

//   setTimeout(() => {
//     root.unmount();
//     document.body.removeChild(div);
//   }, 0);

//   return Promise.resolve(response);
// };

export const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("dinedash-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    const organizational = localStorage.getItem("organizational-source");
    if (organizational) {
      config.headers["organizational-source"] = organizational;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
