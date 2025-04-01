import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Category/categorySlice";
import productSlice from "../Product/productSlice";
import cartSlice from "../Cart/cartSlice";

//we decalre all the reducer here in the slice just do redcucer work means updating intial state
export const store = configureStore({
  reducer: {
    categoryReducer: categorySlice,
    productReducer: productSlice,
    cr: cartSlice,
  },
});
