import { configureStore } from "@reduxjs/toolkit";
import { registerApi } from "../Slices/registerSlice";
import { userApi } from "../Slices/userSlice";
import { BlogApi } from "../Slices/blogSlice";

export const store = configureStore({
  reducer: {
    [registerApi.reducerPath]: registerApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [BlogApi.reducerPath]: BlogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(registerApi.middleware)
      .concat(userApi.middleware)
      .concat(BlogApi.middleware),
  devTools: true,
});
