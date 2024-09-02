import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../api/axiosBaseQuery";
import { AuthResponse, ObjectProps } from "../../types";
import { instance } from "../../api/client";

export const fileApi = createApi({
  reducerPath: "fileApi",
  baseQuery: axiosBaseQuery(instance),
  tagTypes: ["file"],
  endpoints: (builder) => ({
    createfile: builder.mutation<any, FormData>({
      query: (credentials) => ({
        url: "/file",
        method: "POST",
        data: credentials,
      }),
      invalidatesTags: ["file"],
    }),

    createfileattachment: builder.mutation<any, ObjectProps>({
      query: (credentials) => ({
        url: "/file",
        method: "POST",
        data: credentials,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
      invalidatesTags: ["file"],
    }),
    getfile: builder.query<any, string | void>({
      query: (query) => ({
        url: `/document/file?${query}`,
        method: "GET",
      }),
      providesTags: ["file"],
    }),
    updatefile: builder.mutation<AuthResponse, ObjectProps>({
      query: (credentials) => ({
        url: `/document/file?file=${credentials.id}`,
        method: "PUT",
        data: credentials,
      }),
      invalidatesTags: ["file"],
    }),
    inviteteamtofile: builder.mutation<
      AuthResponse,
      { id: string; recipients: Array<ObjectProps> }
    >({
      query: (credentials) => ({
        url: `/document/file/team-members?file=${credentials.id}`,
        method: "PUT",
        data: credentials,
      }),
      invalidatesTags: ["file"],
    }),

    deletefile: builder.mutation<AuthResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/document/file?file=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["file"],
    }),
  }),
});

export const useCreatefileMutation =
  fileApi.useCreatefileMutation as typeof fileApi.endpoints.createfile.useMutation;

export const useCreatefileAttachmentMutation =
  fileApi.useCreatefileattachmentMutation as typeof fileApi.endpoints.createfileattachment.useMutation;

export const useGetfileQuery =
  fileApi.useGetfileQuery as typeof fileApi.endpoints.getfile.useQuery;

export const useUpdatefileMutation =
  fileApi.useUpdatefileMutation as typeof fileApi.endpoints.updatefile.useMutation;

export const useInviteteamtofileMutation =
  fileApi.useInviteteamtofileMutation as typeof fileApi.endpoints.inviteteamtofile.useMutation;

export const usedeletefileMutation =
  fileApi.useDeletefileMutation as typeof fileApi.endpoints.deletefile.useMutation;
