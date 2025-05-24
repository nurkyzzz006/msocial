import build from "next/dist/build";
import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    Register: build.mutation<SIGN.regResponses, SIGN.regRequest>({
      query: (body) => ({
        url: "/auth/sign-up",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useRegisterMutation } = api;
