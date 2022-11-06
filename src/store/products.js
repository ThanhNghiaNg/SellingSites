import { createSlice } from "@reduxjs/toolkit";

const productInitState = {
  products: [],
  allProducts: [],
  filterCategory: "",
};

const productSlice = createSlice({
  name: "product",
  initialState: productInitState,
  reducers: {
    changeProducts: (state, action) => {
      state.products = action.payload;
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setFilter: (state, action) => {
      state.filterCategory = action.payload;
    },
  },
});

export const productsActions = productSlice.actions;
export default productSlice.reducer;
