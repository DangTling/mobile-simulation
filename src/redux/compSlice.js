import { createSlice } from "@reduxjs/toolkit";

const compSlice = createSlice({
  name: "comp",
  initialState: [],
  reducers: {
    setComp: (state, action) => {
      return action.payload;
    },
  },
});

export const { setComp } = compSlice.actions;
export default compSlice.reducer;
