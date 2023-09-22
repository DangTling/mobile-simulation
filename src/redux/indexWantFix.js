import { createSlice } from "@reduxjs/toolkit";

const indexWantFix = createSlice({
  name: "indexWantFix",
  initialState: null,
  reducers: {
    setIndexWantFix: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIndexWantFix } = indexWantFix.actions;
export default indexWantFix.reducer;
