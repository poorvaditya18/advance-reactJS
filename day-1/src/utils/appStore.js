import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";

// create app(redux) store
const appStore = configureStore({
  // here this reducer is responsible to modify the app store. It is like reducer for the APP Store.
  // this reducer is the combination of different reducers of each slice.
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
