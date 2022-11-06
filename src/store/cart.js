import { createSlice } from "@reduxjs/toolkit";

const LIST_CART = "LIST_CART";
const cartInitState = {
  listCart: JSON.parse(localStorage.getItem(LIST_CART)) || [],
};

const addCartHandler = (state, actions) => {
  const record = actions.payload;
  const idxRecord = state.listCart.findIndex(
    (rec) =>
      rec.user === record.user &&
      rec.product._id.$oid === record.product._id.$oid
  );
  if (idxRecord !== -1) {
    state.listCart[idxRecord].amount += record.amount;
  } else {
    state.listCart.push(record);
  }
  localStorage.setItem(LIST_CART, JSON.stringify(state.listCart));
};

const updateCartHandler = (state, actions) => {
  const record = actions.payload;
  const idxRecord = state.listCart.findIndex(
    (rec) =>
      rec.user === record.user &&
      rec.product._id.$oid === record.product._id.$oid
  );
  state.listCart[idxRecord].amount = record.amount;
  localStorage.setItem(LIST_CART, JSON.stringify(state.listCart));
};

const deleteCartHandler = (state, actions) => {
  const record = actions.payload;
  const idxRecord = state.listCart.findIndex(
    (rec) =>
      rec.user === record.user &&
      rec.product._id.$oid === record.product._id.$oid
  );
  console.log(idxRecord)
  state.listCart.splice(idxRecord, 1);
  localStorage.setItem(LIST_CART, JSON.stringify(state.listCart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitState,
  reducers: {
    addCart: addCartHandler,
    updateCart: updateCartHandler,
    deleteCart: deleteCartHandler,
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
