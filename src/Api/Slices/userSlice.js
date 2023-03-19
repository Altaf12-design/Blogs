import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:8080/` }),
  tagTypes: ["Userx"],
  endpoints: (builder) => ({
    getAlluser: builder.query({
      query: () => `Login/`,
      providesTags: ["Userx"],
    }),
    loginUser: builder.query({
      query: (payload) => {
        return {
          url: `Login/`,
          method: "POST",
          body: payload,
          transformResponse: (response, meta, arg) => {
            return response.data;
          },
          transformErrorResponse: (response, meta, arg) => {
            return response.status;
          },
        };
      },
      providesTags: ["Userx"],
    }),
    addAdmin: builder.mutation({
      query: (payload) => ({
        url: `Signup/`,
        method: "POST",
        body: payload,
        transformResponse: (response, meta, arg) => {
          return response.data;
        },
        transformErrorResponse: (response, meta, arg) => {
          return response.status;
        },
        invalidatesTags: ["Userx"],
      }),
    }),
  }),
});
export const {useLazyLoginUserQuery} = userApi;
