import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../api/axiosBaseQuery";
import { AuthResponse, LoginRequest, ObjectProps } from "../../types";
import { instance } from "../../api/client";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery(instance),
  tagTypes: ["user-profile"],
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        data: credentials,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    verifyemail: builder.mutation<AuthResponse, ObjectProps>({
      query: (credentials) => ({
        url: "/auth/verify-email-account",
        method: "POST",
        data: credentials,
      }),
    }),
    register: builder.mutation<AuthResponse, ObjectProps>({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        data: credentials,
      }),
    }),
    requestotp: builder.mutation<AuthResponse, ObjectProps>({
      query: (credentials) => ({
        url: "/user/resend-otp",
        method: "PUT",
        data: credentials,
      }),
    }),
    validateotp: builder.mutation<AuthResponse, ObjectProps>({
      query: (credentials) => ({
        url: "/user/otp",
        method: "POST",
        data: credentials,
      }),
    }),
    requestresetpasswordtoken: builder.mutation<AuthResponse, ObjectProps>({
      query: (credentials) => ({
        url: "/user/reset-password",
        method: "PUT",
        data: credentials,
      }),
    }),
    resetpassword: builder.mutation<AuthResponse, ObjectProps>({
      query: (credentials) => ({
        url: "/user/reset-password",
        method: "POST",
        data: credentials,
      }),
    }),
    getprofile: builder.query<any, void>({
      query: () => ({
        url: "/user/profile?_populate=createdBy",
        method: "GET",
      }),
      providesTags: ["user-profile"],
    }),
    getprofiles: builder.query<any, void>({
      query: () => ({
        url: "/user/profiles?_populate=createdBy",
        method: "GET",
      }),
      providesTags: ["user-profile"],
    }),
    updateprofile: builder.mutation<AuthResponse, ObjectProps>({
      query: (credentials) => ({
        url: "/user/profile",
        method: "PUT",
        data: credentials,
      }),
      invalidatesTags: ["user-profile"],
    }),
    updatepassword: builder.mutation<AuthResponse, ObjectProps>({
      query: (credentials) => ({
        url: "/auth/change-password",
        method: "POST",
        data: credentials,
      }),
    }),

    requestemailverification: builder.mutation<AuthResponse, ObjectProps>({
      query: (credentials) => ({
        url: "/auth/request-reset-password",
        method: "POST",
        data: credentials,
      }),
    }),

    resetforgotpassword: builder.mutation<AuthResponse, ObjectProps>({
      query: (credentials) => ({
        url: "/auth/reset-password",
        method: "POST",
        data: credentials,
      }),
    }),
  }),
});

export const useLoginMutation =
  authApi.useLoginMutation as typeof authApi.endpoints.login.useMutation;

export const useLogoutMutation =
  authApi.useLogoutMutation as typeof authApi.endpoints.logout.useMutation;

export const useVerifyemailMutation =
  authApi.useVerifyemailMutation as typeof authApi.endpoints.verifyemail.useMutation;

export const useRegisterMutation =
  authApi.useRegisterMutation as typeof authApi.endpoints.register.useMutation;

export const useValidateOtpMutation =
  authApi.useValidateotpMutation as typeof authApi.endpoints.validateotp.useMutation;

export const useRequestresetpasswordtoken =
  authApi.useRequestresetpasswordtokenMutation as typeof authApi.endpoints.requestresetpasswordtoken.useMutation;

export const useResetpassword =
  authApi.useResetpasswordMutation as typeof authApi.endpoints.resetpassword.useMutation;

export const useGetprofileQuery =
  authApi.useGetprofileQuery as typeof authApi.endpoints.getprofile.useQuery;

export const useGetprofilesQuery =
  authApi.useGetprofilesQuery as typeof authApi.endpoints.getprofiles.useQuery;

export const useUpdateprofileMutation =
  authApi.useUpdateprofileMutation as typeof authApi.endpoints.updateprofile.useMutation;

export const useUpdatepasswordMutation =
  authApi.useUpdatepasswordMutation as typeof authApi.endpoints.updatepassword.useMutation;

export const useRequestemailverificationMutation =
  authApi.useRequestemailverificationMutation as typeof authApi.endpoints.requestemailverification.useMutation;

export const useResetforgotpasswordMutation =
  authApi.useResetforgotpasswordMutation as typeof authApi.endpoints.resetforgotpassword.useMutation;
