import { createSlice } from "@reduxjs/toolkit";

// cart slice
// createSlice function takes the configuration. - name , initialState , reducers
// we will write each reducer function according to different actions
const cartSlice = createSlice({
  name: "cart",

  // for initial value
  initialState: {
    items: [],
  },

  // action and reducer which will modify the initial state
  reducers: {
    // addItem is an action and with it we have corresponding reducer(kind of api) function
    // this reducer function modifies the slice of the store.
    // reducer function gets access to the state(of store) and action.
    // we are mutating the state over here
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

/*
 *  createSlice will return object like this ->
 * {
 *   actions:{
 *          addItem,
 *          removeItem ....
 *          },
 *  reducer
 * }
 */

// exporting actions
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// exporting reducers
export default cartSlice.reducer;
