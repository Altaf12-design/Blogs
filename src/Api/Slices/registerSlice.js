import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const registerApi = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  tagTypes: ["Userx"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `registerGet/`,
      providesTags: ["Userx"],
    }),

    addUser: builder.mutation({
      query: (payload) => ({
        url: "register/",
        method: "POST",
        body: payload,
      }),
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
      transformErrorResponse: (response, meta, arg) => {
        return response.status;
      },
      invalidatesTags: ["Userx"],
    }),
  }),
});

export const { useAddUserMutation, useGetUsersQuery } = registerApi;
