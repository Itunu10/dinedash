import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../api/axiosBaseQuery";
import { AuthResponse, ObjectProps } from "../../types";
import { instance } from "../../api/client";

export const transactionApi = createApi({
  reducerPath: "transactionApi",
  baseQuery: axiosBaseQuery(instance),
  tagTypes: ["transaction"],
  endpoints: (builder) => ({
    createtransaction: builder.mutation<any, FormData>({
      query: (credentials) => ({
        url: "/transaction",
        method: "POST",
        data: credentials,
      }),
      invalidatesTags: ["transaction"],
    }),

    gettransaction: builder.query<any, string | void>({
      query: (query) => ({
        url: `/transaction?${query}`,
        method: "GET",
      }),
      providesTags: ["transaction"],
    }),

    gettransactions: builder.query<any, string | void>({
      query: (query) => ({
        url: `/transaction?${query}`,
        method: "GET",
      }),
      providesTags: ["transaction"],
    }),

    updatetransaction: builder.mutation<AuthResponse, ObjectProps>({
      query: (credentials) => ({
        url: `/transaction/${credentials.id}`,
        method: "PUT",
        data: credentials,
      }),
      invalidatesTags: ["transaction"],
    }),

    deletetransaction: builder.mutation<AuthResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/transaction?transaction=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["transaction"],
    }),
  }),
});

export const useCreatetransactionMutation =
  transactionApi.useCreatetransactionMutation as typeof transactionApi.endpoints.createtransaction.useMutation;

export const useGettransactionQuery =
  transactionApi.useGettransactionQuery as typeof transactionApi.endpoints.gettransaction.useQuery;

export const useGettransactionsQuery =
  transactionApi.useGettransactionsQuery as typeof transactionApi.endpoints.gettransactions.useQuery;

export const useUpdatetransactionMutation =
  transactionApi.useUpdatetransactionMutation as typeof transactionApi.endpoints.updatetransaction.useMutation;

export const usedeletetransactionMutation =
  transactionApi.useDeletetransactionMutation as typeof transactionApi.endpoints.deletetransaction.useMutation;
