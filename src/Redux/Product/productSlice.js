import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productAction";

// const initalState = [
//   {
//     pName: "Jacket",
//     price: 45,
//     img: "shop-1.jpg",
//   },
//   {
//     pName: "Purse",
//     price: 50,
//     img: "shop-2.jpg",
//   },
//   {
//     pName: "Dress",
//     price: 38,
//     img: "shop-3.jpg",
//   },
//   {
//     pName: "Denim",
//     price: 42,
//     img: "shop-4.jpg",
//   },
//   {
//     pName: "Boots",
//     price: 65,
//     img: "shop-5.jpg",
//   },
//   {
//     pName: "Bag",
//     price: 35,
//     img: "shop-6.jpg",
//   },
// ];

//set a intial data as dynamic comes comes from api
const initalState = {
  products: [], //the json data comes here
  status: "idle",
  error: "",
};
const productSlice = createSlice({
  name: "Products",
  initialState: initalState,
  reducers: {
    //for filetering data based upon subcategory
    filterProducts: (state, action) => {
      //we get action as an payload contains selected subcategory and and whole product data
      const filteredData = action.payload.products.filter((elem) => {
        console.log(elem.category_id);
        console.log(action.payload.selectedCategory.id);
        return (
          //this is for product category_id from the product table it should same as selected sub category id
          elem.category_id === action.payload.selectedCategory.id
        );
      });
      state.products = filteredData;
    },
    //this reducer we pass a action to side nav price filter component that calls this and based on that we filter product and showin product component
    filterByPrice: (state, action) => {
      const filteredData = action.payload.products.filter((elem) => {
        //return product grether than min and less than max
        return (
          //means product elem price grether than maxpricelimit passed in payload of action
          elem.price >= action.payload.minPriceLimit &&
          elem.price < action.payload.maxPriceLimit
        );
      });
      state.products = filteredData;
    },
  },
  extraReducers: (builder) => {
    builder
      //state->intial state
      .addCase(getProducts.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "Success"; // Fix typo: 'state.state' -> 'state.status'
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "Error";
        state.error = action.error.message;
      });
  },
});

export const { filterProducts, filterByPrice } = productSlice.actions;
export default productSlice.reducer;
