import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BlogApi = createApi({
  reducerPath: "BlogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  tagTypes: ["blog"],
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => `getBlog/`,
      providesTags: ["blog"],
    }),


    updateUserById: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/updateBlog/${id}`,
        method: "PUT",
        body: payload,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
      // Pick out errors and prevent nested properties in a hook or selector
      transformErrorResponse: (response, meta, arg) => {
        return response.status;
      },
      invalidatesTags: ["blog"],
    }),
    deleteBlogById: builder.mutation({
      query: (id) => ({
        url: `/deleteBlog/${id}`,
        method: "DELETE",
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
      // Pick out errors and prevent nested properties in a hook or selector
      transformErrorResponse: (response, meta, arg) => {
        return response.status;
      },
      invalidatesTags: ["blog"],
    }),
    addBlogs: builder.mutation({
      query: (payload) => ({
        url: `postBlog/`,
        method: "POST",
        body: payload,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
      // Pick out errors and prevent nested properties in a hook or selector
      transformErrorResponse: (response, meta, arg) => {
        return response.status;
      },
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useAddBlogsMutation,
  useUpdateUserByIdMutation,
  useGetBlogsQuery,
  useDeleteBlogByIdMutation,
} = BlogApi;
