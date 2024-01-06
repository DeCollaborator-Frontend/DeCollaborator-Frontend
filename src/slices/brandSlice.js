import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const brandSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default brandSlice.reducer;
