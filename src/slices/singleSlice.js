import { createSlice } from "@reduxjs/toolkit";

export const singleSlice = createSlice({
  name: "counter",
  initialState: {
    cartitem: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      let findproduct = state.cartitem.findIndex(
        (item) => item.id == action.payload.id
      );
      if (findproduct !== -1) {
        state.cartitem[findproduct].qun += 1;
        localStorage.setItem("cart", JSON.stringify(state.cartitem));
      } else {
        state.cartitem = [...state.cartitem, action.payload];
        localStorage.setItem("cart", JSON.stringify(state.cartitem));
      }
    },
    removeProduct: (state, action) => {
      state.cartitem.splice(action.payload, 1);
      localStorage.setItem("cart", JSON.stringify(state.cartitem));
    },
    incrementProd: (state, action) => {
      if (
        state.cartitem[action.payload].qun <
        state.cartitem[action.payload].stock
      ) {
        state.cartitem[action.payload].qun += 1;
        localStorage.setItem("cart", JSON.stringify(state.cartitem));
      }
    },
    decrementProd: (state, action) => {
      if (state.cartitem[action.payload].qun > 1) {
        state.cartitem[action.payload].qun -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cartitem));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeProduct, incrementProd, decrementProd } =
  singleSlice.actions;

export default singleSlice.reducer;
