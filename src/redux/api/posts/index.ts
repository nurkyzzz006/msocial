import build from "next/dist/build";
import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPost: build.query<POST.getPostRespons, POST.getPostRequest>({
      query: () => ({
        url: "/post/get-all",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetPostQuery } = api;
