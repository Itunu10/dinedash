import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../api/axiosBaseQuery";
import { AuthResponse, ObjectProps } from "../../types";
import { instance } from "../../api/client";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: axiosBaseQuery(instance),
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    createcart: builder.mutation<any, ObjectProps>({
      query: (credentials) => ({
        url: "/cart",
        method: "POST",
        data: credentials,
      }),
      invalidatesTags: ["cart"],
    }),

    getcart: builder.query<any, string | void>({
      query: (query) => ({
        url: `/cart?${query}`,
        method: "GET",
      }),
      providesTags: ["cart"],
    }),

    getcarts: builder.query<any, string | void>({
      query: (query) => ({
        url: `/cart?_populate=menuId.image&${query}`,
        method: "GET",
      }),
      providesTags: ["cart"],
    }),

    updatecart: builder.mutation<AuthResponse, ObjectProps>({
      query: (credentials) => ({
        url: `/cart/${credentials.id}`,
        method: "PUT",
        data: credentials,
      }),
      invalidatesTags: ["cart"],
    }),

    deletecart: builder.mutation<AuthResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const useCreatecartMutation =
  cartApi.useCreatecartMutation as typeof cartApi.endpoints.createcart.useMutation;

export const useGetcartQuery =
  cartApi.useGetcartQuery as typeof cartApi.endpoints.getcart.useQuery;

export const useGetcartsQuery =
  cartApi.useGetcartsQuery as typeof cartApi.endpoints.getcarts.useQuery;

export const useUpdatecartMutation =
  cartApi.useUpdatecartMutation as typeof cartApi.endpoints.updatecart.useMutation;

export const usedeletecartMutation =
  cartApi.useDeletecartMutation as typeof cartApi.endpoints.deletecart.useMutation;
