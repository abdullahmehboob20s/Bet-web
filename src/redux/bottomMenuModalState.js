import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bottomMenuModalOpen: false,
};

export const bottomMenuModalState = createSlice({
  name: "bottomMenuModalState",
  initialState,
  reducers: {
    toggleBottomMenuModalOpen: (state, action) => {
      state.bottomMenuModalOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleBottomMenuModalOpen } = bottomMenuModalState.actions;

export default bottomMenuModalState.reducer;
