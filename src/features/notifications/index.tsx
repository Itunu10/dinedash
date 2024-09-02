import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../api/axiosBaseQuery";
import { AuthResponse, ObjectProps } from "../../types";
import { instance } from "../../api/client";

export const notificationApi = createApi({
  reducerPath: "notificationApi",
  baseQuery: axiosBaseQuery(instance),
  tagTypes: ["notification"],
  endpoints: (builder) => ({
    createnotification: builder.mutation<any, ObjectProps>({
      query: (credentials) => ({
        url: "/notification",
        method: "POST",
        data: credentials,
      }),
      invalidatesTags: ["notification"],
    }),

    getnotification: builder.query<any, string | void>({
      query: (query) => ({
        url: `/notification?${query}`,
        method: "GET",
      }),
      providesTags: ["notification"],
    }),

    getnotifications: builder.query<any, string | void>({
      query: (query) => ({
        url: `/notification?${query}`,
        method: "GET",
      }),
      providesTags: ["notification"],
    }),

    updatenotification: builder.mutation<
      AuthResponse,
      { id: string; values: ObjectProps }
    >({
      query: (credentials) => ({
        url: `/notification/${credentials.id}`,
        method: "PUT",
        data: credentials.values,
      }),
      invalidatesTags: ["notification"],
    }),

    deletenotification: builder.mutation<AuthResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/notification?notification=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["notification"],
    }),
  }),
});

export const useCreatenotificationMutation =
  notificationApi.useCreatenotificationMutation as typeof notificationApi.endpoints.createnotification.useMutation;

export const useGetnotificationQuery =
  notificationApi.useGetnotificationQuery as typeof notificationApi.endpoints.getnotification.useQuery;

export const useGetnotificationsQuery =
  notificationApi.useGetnotificationsQuery as typeof notificationApi.endpoints.getnotifications.useQuery;

export const useUpdatenotificationMutation =
  notificationApi.useUpdatenotificationMutation as typeof notificationApi.endpoints.updatenotification.useMutation;

export const usedeletenotificationMutation =
  notificationApi.useDeletenotificationMutation as typeof notificationApi.endpoints.deletenotification.useMutation;
