import { createAsyncThunk } from "@reduxjs/toolkit";

//return the category data ->we use createasyncthunk ->middleware ->this will pass the data to reducer
export const getCategories = createAsyncThunk(
  "getCategories", // name of middleware
  () => {
    const categories = fetch("http://localhost:5001/productCategories").then(
      (response) => response.json()
    );
    return categories;
  }
);
