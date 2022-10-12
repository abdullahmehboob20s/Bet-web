import { configureStore } from "@reduxjs/toolkit";
import signInModalState from "./signInModalState";

export const store = configureStore({
  reducer: {
    signInModalState,
  },
});
