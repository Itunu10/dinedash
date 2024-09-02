import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../api/axiosBaseQuery";
import { AuthResponse, ObjectProps } from "../../types";
import { instance } from "../../api/client";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: axiosBaseQuery(instance),
  tagTypes: ["category"],
  endpoints: (builder) => ({
    createcategory: builder.mutation<any, ObjectProps>({
      query: (credentials) => ({
        url: "/category",
        method: "POST",
        data: credentials,
      }),
      invalidatesTags: ["category"],
    }),

    getcategory: builder.query<any, string | void>({
      query: (query) => ({
        url: `/category/${query}`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),

    getcategories: builder.query<any, string | void>({
      query: (query) => ({
        url: `/category?_populate=image&${query}`,
        method: "GET",
      }),
      providesTags: ["category"],
    }),

    updatecategory: builder.mutation<
      AuthResponse,
      { id: string; values: ObjectProps }
    >({
      query: (credentials) => ({
        url: `/category/${credentials.id}`,
        method: "PUT",
        data: credentials.values,
      }),
      invalidatesTags: ["category"],
    }),

    deletecategory: builder.mutation<AuthResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

export const useCreatecategoryMutation =
  categoryApi.useCreatecategoryMutation as typeof categoryApi.endpoints.createcategory.useMutation;

export const useGetcategoryQuery =
  categoryApi.useGetcategoryQuery as typeof categoryApi.endpoints.getcategory.useQuery;

export const useGetcategoriesQuery =
  categoryApi.useGetcategoriesQuery as typeof categoryApi.endpoints.getcategories.useQuery;

export const useUpdatecategoryMutation =
  categoryApi.useUpdatecategoryMutation as typeof categoryApi.endpoints.updatecategory.useMutation;

export const usedeletecategoryMutation =
  categoryApi.useDeletecategoryMutation as typeof categoryApi.endpoints.deletecategory.useMutation;
