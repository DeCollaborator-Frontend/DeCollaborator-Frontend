import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import brandSlice from "./slices/brandSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    brand: brandSlice,
  },
});
