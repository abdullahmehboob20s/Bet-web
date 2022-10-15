import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUser: false,
};

export const user = createSlice({
  name: "User State",
  initialState,
  reducers: {
    signIn: (state) => {
      state.isUser = true;
    },
    signOut: (state) => {
      state.isUser = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn, signOut } = user.actions;

export default user.reducer;
