import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const signInModalState = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleSignInModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSignInModal } = signInModalState.actions;

export default signInModalState.reducer;
