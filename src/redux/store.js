import { configureStore } from "@reduxjs/toolkit";
import balanceVisibilityState from "./balanceVisibilityState";
import bottomMenuModalState from "./bottomMenuModalState";
import locationState from "./locationState";
import registerModalState from "./registerModalState";
import signInModalState from "./signInModalState";
import stakeModalVisibilityState from "./stakeModalVisibilityState";
import user from "./user";

export const store = configureStore({
  reducer: {
    signInModalState,
    registerModalState,
    balanceVisibilityState,
    bottomMenuModalState,
    stakeModalVisibilityState,
    user,
    locationState,
  },
});
