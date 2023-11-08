import { createSlice, configureStore } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: {
    dark: false,
  },
  reducers: {
    light: (state) => {
      state.dark = false;
    },
    dark: (state) => {
      state.dark = true;
    },
  },
});

export const { light, dark } = modeSlice.actions;

const store = configureStore({
  reducer: modeSlice.reducer,
});

export default store;
