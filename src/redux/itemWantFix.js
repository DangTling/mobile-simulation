import { createSlice } from "@reduxjs/toolkit";

const itemWantFix = createSlice({
  name: "itemWantFix",
  initialState: {},
  reducers: {
    setItemWantFix: (state, action) => {
      return action.payload;
    },
  },
});

export const { setItemWantFix } = itemWantFix.actions;

export default itemWantFix.reducer;
