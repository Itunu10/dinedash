import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../api/axiosBaseQuery";
import { AuthResponse, ObjectProps } from "../../types";
import { instance } from "../../api/client";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: axiosBaseQuery(instance),
  tagTypes: ["order"],
  endpoints: (builder) => ({
    createorder: builder.mutation<any, ObjectProps>({
      query: (credentials) => ({
        url: "/order",
        method: "POST",
        data: credentials,
      }),
      invalidatesTags: ["order"],
    }),

    getorder: builder.query<any, string | void>({
      query: (query) => ({
        url: `/order?${query}`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),

    getorders: builder.query<any, string | void>({
      query: (query) => ({
        url: `/order?_populate=createdBy&${query}`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),

    updateorder: builder.mutation<AuthResponse, ObjectProps>({
      query: (credentials) => ({
        url: `/order/${credentials.id}`,
        method: "PUT",
        data: credentials,
      }),
      invalidatesTags: ["order"],
    }),

    deleteorder: builder.mutation<AuthResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/order?order=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const useCreateorderMutation =
  orderApi.useCreateorderMutation as typeof orderApi.endpoints.createorder.useMutation;

export const useGetorderQuery =
  orderApi.useGetorderQuery as typeof orderApi.endpoints.getorder.useQuery;

export const useGetordersQuery =
  orderApi.useGetordersQuery as typeof orderApi.endpoints.getorders.useQuery;

export const useUpdateorderMutation =
  orderApi.useUpdateorderMutation as typeof orderApi.endpoints.updateorder.useMutation;

export const usedeleteorderMutation =
  orderApi.useDeleteorderMutation as typeof orderApi.endpoints.deleteorder.useMutation;
