import { createSlice } from "@reduxjs/toolkit";

const popupInitState = {
  isShowPopup: false,
  currentID: "",
};

const popupSlice = createSlice({
  name: "popup",
  initialState: popupInitState,
  reducers: {
    showPopup: (state) => {
      state.isShowPopup = true;
    },
    hidePopup: (state) => {
      state.isShowPopup = false;
    },
    pickID: (state, action) => {
      state.currentID = action.payload;
    },
    removeID: (state) => {
      state.currentID = "";
    },
  },
});

export const popupActions = popupSlice.actions;
export default popupSlice.reducer;
