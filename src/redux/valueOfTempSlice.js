import { createSlice } from "@reduxjs/toolkit";

const valueOfTempSlice = createSlice({
  name: "valueOfTemp",
  initialState: 0,
  reducers: {
    setValueOfTemp: (state, action) => {
      return action.payload;
    },
  },
});

export const { setValueOfTemp } = valueOfTempSlice.actions;
export default valueOfTempSlice.reducer;
