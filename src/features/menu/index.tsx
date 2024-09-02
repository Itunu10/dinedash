import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../api/axiosBaseQuery";
import { AuthResponse, ObjectProps } from "../../types";
import { instance } from "../../api/client";

export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: axiosBaseQuery(instance),
  tagTypes: ["menu"],
  endpoints: (builder) => ({
    createmenu: builder.mutation<any, ObjectProps>({
      query: (credentials) => ({
        url: "/menu",
        method: "POST",
        data: credentials,
      }),
      invalidatesTags: ["menu"],
    }),

    getmenu: builder.query<any, string | void>({
      query: (query) => ({
        url: `/menu/${query}`,
        method: "GET",
      }),
      providesTags: ["menu"],
    }),

    getmenus: builder.query<any, string | void>({
      query: (query) => ({
        url: `/menu?_populate=image&${query}`,
        method: "GET",
      }),
      providesTags: ["menu"],
    }),

    updatemenu: builder.mutation<
      AuthResponse,
      { id: string; values: ObjectProps }
    >({
      query: (credentials) => ({
        url: `/menu/${credentials.id}`,
        method: "PUT",
        data: credentials.values,
      }),
      invalidatesTags: ["menu"],
    }),

    deletemenu: builder.mutation<AuthResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/menu/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["menu"],
    }),
  }),
});

export const useCreatemenuMutation =
  menuApi.useCreatemenuMutation as typeof menuApi.endpoints.createmenu.useMutation;

export const useGetmenuQuery =
  menuApi.useGetmenuQuery as typeof menuApi.endpoints.getmenu.useQuery;

export const useGetmenusQuery =
  menuApi.useGetmenusQuery as typeof menuApi.endpoints.getmenus.useQuery;

export const useUpdatemenuMutation =
  menuApi.useUpdatemenuMutation as typeof menuApi.endpoints.updatemenu.useMutation;

export const usedeletemenuMutation =
  menuApi.useDeletemenuMutation as typeof menuApi.endpoints.deletemenu.useMutation;
