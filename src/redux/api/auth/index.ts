import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    Register: build.mutation<SIGN.regResponses, SIGN.regRequest>({
      query: (body) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["auth"],
    }),
    getMe: build.query<SIGN.GetMeResponses, SIGN.GeMeRequest>({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    login: build.mutation<SIGN.LoginResponses, SIGN.LoginRequest>({
      query: (body) => ({
        url: "/auth/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),
    forgotPassword: build.mutation<
      SIGN.ForgotPasswordResponse,
      SIGN.ForgotPasswordRequest
    >({
      query: (body) => ({
        url: "/auth/forgot",
        method: "POST",
        body,
      }),
      invalidatesTags: ["auth"],
    }),
    resetPassword: build.mutation<
      SIGN.ResetPasswordResponse,
      SIGN.ResetPasswordRequest
    >({
      query: (body) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});
export const {
  useRegisterMutation,
  useGetMeQuery,
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = api;
