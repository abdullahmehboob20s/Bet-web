import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  background: false,
  location: null,
};

export const locationState = createSlice({
  name: "locationState",
  initialState,
  reducers: {
    changeBackground: (state, action) => {
      state.background = action.payload;
    },
    changeLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeBackground, changeLocation } = locationState.actions;

export default locationState.reducer;
