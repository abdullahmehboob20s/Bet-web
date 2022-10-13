import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: true,
};

export const balanceVisibilityState = createSlice({
  name: "balanceVisibilityState",
  initialState,
  reducers: {
    toogleVisibility: (state, action) => {
      state.visible = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toogleVisibility } = balanceVisibilityState.actions;

export default balanceVisibilityState.reducer;
