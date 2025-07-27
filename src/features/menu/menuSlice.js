// features/menu/menuSlice.js
import { createSlice } from "@reduxjs/toolkit";
// import { image } from "framer-motion/client";

const initialState = {
  items: [
    { id: 1, name: "漢堡", price: 50, image: "./assets/images/hamburger.png" },
    { id: 2, name: "鐵板麵", price: 60, image: "./assets/images/noodles.png" },
    { id: 3, name: "蛋餅", price: 30, image: "./assets/images/egg.png" },
    { id: 4, name: "蘿蔔糕", price: 40, image: "./assets/images/radish.png" },
  ],
  cart: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) state.cart.push(item);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((_, idx) => idx !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = menuSlice.actions;
export default menuSlice.reducer;
