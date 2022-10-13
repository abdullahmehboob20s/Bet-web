import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRegisterModalOpen: false,
};

export const registerModalState = createSlice({
  name: "registerModalState",
  initialState,
  reducers: {
    toggleRegisterModal: (state, action) => {
      state.isRegisterModalOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleRegisterModal } = registerModalState.actions;

export default registerModalState.reducer;
