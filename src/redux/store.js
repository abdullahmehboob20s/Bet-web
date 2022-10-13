import { configureStore } from "@reduxjs/toolkit";
import balanceVisibilityState from "./balanceVisibilityState";
import registerModalState from "./registerModalState";
import signInModalState from "./signInModalState";

export const store = configureStore({
  reducer: {
    signInModalState,
    registerModalState,
    balanceVisibilityState,
  },
});
