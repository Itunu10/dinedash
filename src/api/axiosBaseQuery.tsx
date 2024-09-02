import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, AxiosInstance } from "axios";

const axiosBaseQuery = (
  axiosInstance: AxiosInstance
): BaseQueryFn<
  { url: string; method: string; data?: any; params?: any },
  unknown,
  unknown
> => {
  return async ({ url, method, data, params }) => {
    try {
      const result = await axiosInstance.request({
        url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
};

export default axiosBaseQuery;
