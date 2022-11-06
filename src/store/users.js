import { createSlice } from "@reduxjs/toolkit";
export const USER_LIST = "USER_LIST";
export const USER = "USER";

const usersInitState = {
  userArr: JSON.parse(localStorage.getItem(USER_LIST)) || [],
  currentUser: JSON.parse(localStorage.getItem(USER)) || null,
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitState,
  reducers: {
    addUser: (state, action) => {
      state.userArr.push(action.payload);
      localStorage.setItem(USER_LIST, JSON.stringify(state.userArr));
    },
    login: (state, action) => {
      state.currentUser = {
        ...action.payload,
      };
      localStorage.setItem(USER, JSON.stringify(state.currentUser));
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem(USER);
    },
  },
});

export const userActions = usersSlice.actions;
export default usersSlice.reducer;
