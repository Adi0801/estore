import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./actions";

const initalState = {
  categories: [],
  status: "idle",
  error: "",
};
const categorySlice = createSlice({
  name: "Category",
  initialState: initalState,
  reducers: {},
  //getcategories action return the promise because og the middleware
  //there are state pending or fullfilled
  //this is outdated
  // extraReducers: {
  //   [getCategories.pending]: (state, action) => {
  //     state.status = "Loading...";
  //   },

  //   [getCategories.fulfilled]: (state, action) => {
  //     state.state = "Success";
  //     state.categories = action.payload;
  //   },
  //   [getCategories.rejected]: (state, action) => {
  //     state.status = "Error";
  //     state.error = action.error.message;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "Success"; // Fix typo: 'state.state' -> 'state.status'
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "Error";
        state.error = action.error.message;
      });
  },
});

//configuring reducer in store
export default categorySlice.reducer;
