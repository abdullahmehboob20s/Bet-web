import { configureStore } from "@reduxjs/toolkit";
import registerModalState from "./registerModalState";
import signInModalState from "./signInModalState";

export const store = configureStore({
  reducer: {
    signInModalState,
    registerModalState,
  },
});
