import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItemsPrice: 0,
  totalItems: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    //there are many item add cartItem ->now it check present ids with current action.payload.id
    addCartItem: (state, action) => {
      let item_exists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      //so if the same item we add so totalitem count will not incerease
      if (!item_exists) {
        state.cartItems = [...state.cartItems, action.payload];
        state.totalQuantity = ++state.totalQuantity;
        //add  the current price with selecr item price
        state.totalItemsPrice = state.totalItemsPrice + action.payload.price;
        state.totalItems = ++state.totalItems;
      }
      console.log(state.cartItems);
    },
    //Cart updation + and -
    updateItemQuantity: (state, action) => {
      //key ->item index like if first item selected its index is 0 then for second item not same 1
      let index = action.payload.key;

      if (action.payload.operator === "+") {
        //increase quantity propertyby 1 ->this property we pased in product componetne when product is dipach to cart component
        ++state.cartItems[index].quantity;
        state.totalItemsPrice =
          state.totalItemsPrice + action.payload.item.price;
        ++state.totalQuantity;
      } else {
        if (state.cartItems[index].quantity > 1) {
          --state.cartItems[index].quantity;
          //updating total price and total quantity
          state.totalItemsPrice =
            state.totalItemsPrice - action.payload.item.price;
          --state.totalQuantity;
        }
      }
    },
    deleteCartItem: (state, action) => {
      let filteredCart = state.cartItems.filter((elem) => {
        //here we are filtering elem id means constant id for specdic product comes from db ,with selected item in ui
        return elem.id !== action.payload.id;
      });
      //then set the cartItem with this
      state.cartItems = filteredCart;

      //reducing the deleted item price from total items price-> this we can see when multiple product is present
      state.totalItemsPrice =
        state.totalItemsPrice - action.payload.price * action.payload.quantity;
      state.totalQuantity = state.totalQuantity - action.payload.quantity;
      --state.totalItems;
    },
  },
});

//so addcartitem used as action when dispach from product componetnwhere this butoton reside
export const { addCartItem, updateItemQuantity, deleteCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
