import popupReducer from "./popup";
import productsReducer from "./products";
import usersReducer from "./users";
import cartReducer from "./cart";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    products: productsReducer,
    users: usersReducer,
    cart: cartReducer,
  },
});

export default store;
