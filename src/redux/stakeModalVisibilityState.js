import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stakeModalVisible: false,
  itemId: null,
};

export const stakeModalVisibilityState = createSlice({
  name: "stakeModalVisibilityState",
  initialState,
  reducers: {
    toogleStakeModalVisibility: (state, action) => {
      state.stakeModalVisible = action.payload.visibility;
      state.itemId = action.payload.id ? action.payload.id : null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toogleStakeModalVisibility } = stakeModalVisibilityState.actions;

export default stakeModalVisibilityState.reducer;
